import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private baseUrl = 'http://localhost:8080/technico/owners'; 

  constructor(private http: HttpClient) { }

  // Δημιουργία νέου Owner
  createOwner(owner: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, owner);
  }

  // Λήψη όλων των Owners
  getOwners(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Λήψη ενός Owner μέσω ID
  getOwnerById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Ενημέρωση ενός Owner
  updateOwner(id: string, owner: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, owner);
  }

  // Διαγραφή ενός Owner
  deleteOwner(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
