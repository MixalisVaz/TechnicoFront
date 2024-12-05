import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private baseUrl = 'http://localhost:8080/technico/users'; 

  constructor(private http: HttpClient) { }

  createOwner(owner: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, owner);
  }

  getOwners(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getOwnerById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getOwnerByVatNumber(vatNumber: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/vat/${vatNumber}`);
  }

  updateOwner(id: string, owner: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, owner);
  }

  deleteOwner(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
