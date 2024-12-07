import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/technico/api/auth/login'; 

  constructor(private http: HttpClient) {}


  login(credentials: { username: string; password: string }): Observable<{ role: string }> {
    return this.http.post<{ role: string }>(this.loginUrl, credentials);
  }
}


