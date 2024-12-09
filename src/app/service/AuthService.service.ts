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
        this.http.post<{ role: string; vatNumber: string; username:string }>(this.loginUrl, credentials).subscribe({
            next: (response) => {
                this.currentUsername = credentials.username;
                localStorage.setItem('vatNumber', response.vatNumber);
                localStorage.setItem('username', credentials.username); 
                console.log(response);
                observer.next(response);
                observer.complete();
            },
            error: (error) => {
                observer.error(error);
            }
        });
    });
}


getCurrentVatNumber(): string | null {
    return localStorage.getItem('vatNumber');
}

getCurrentUserName(): string | null {
    return localStorage.getItem('username');
}

}


