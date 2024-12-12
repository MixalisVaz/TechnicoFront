import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/technico/api/auth/login'; 
  private currentUsername: string | null = null;

  constructor(private http: HttpClient) {}


  login(credentials: { username: string; password: string }): Observable<{ role: string; vatNumber: string; username:string }> {
    return new Observable((observer) => {
        this.http.post<{ role: string; vatNumber: string; username:string, id:string }>(this.loginUrl, credentials).subscribe({
            next: (response) => {
                this.currentUsername = credentials.username;
                localStorage.setItem('vatNumber', response.vatNumber);
                localStorage.setItem('username', credentials.username);
                localStorage.setItem('role', response.role);
                localStorage.setItem('userId', response.id);
                console.log(response);
                observer.next(response);
                observer.complete();
            },
            error: (error) => {
                localStorage.setItem('role', 'GUEST');
                observer.error(error);
            }
        });
    });
}


logout(): void {
    localStorage.clear();
    window.location.href = '/'; 
  }

getCurrentVatNumber(): string | null {
    return localStorage.getItem('vatNumber');
}

getCurrentUserName(): string | null {
    return localStorage.getItem('username');
}

getRole(): "ADMIN" | "PROPERTY_OWNER" | undefined {
    let role= localStorage.getItem('role');
    if(role==="ADMIN"){
        return "ADMIN"
    }else if(role==="PROPERTY_OWNER"){
        return "PROPERTY_OWNER"
    }else{
        return undefined
    }
}

getUserId():string | null{
    return localStorage.getItem('userId');
}

isLoggedIn(): boolean {
    return !!localStorage.getItem('role');
  }

}

