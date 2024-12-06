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
    return this.http.post(`${this.baseUrl}/new/user`, owner);
  }

  getOwners(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getOwnerById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getOwnerByVatNumber(vatNumber: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/vat/${vatNumber}`); // /update
  }

  // updateOwner(id: string, owner: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/${id}`, owner);
  // }

  // updateOwner(ownervatNumber: string, owner: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/${ownervatNumber}`, owner);
  // }

  updateOwner(vatNumber: string, owner: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/update-by-vatNumber/${vatNumber}`, owner);
  }

  // deleteOwner(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`);
  // }

  deleteOwner(vatNumber: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/user/delete-by-vat/${vatNumber}`);
  }

}
