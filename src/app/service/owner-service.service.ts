import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../domain/owner';


@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private apiUrl = 'http://localhost:4200/owners'; 

  constructor(private http: HttpClient) {}

  getAllOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl); 
  }

  createOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner);
  }

  deleteOwner(vatNumber: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${vatNumber}`);
  }

  searchOwners(criteria: string): Observable<Owner[]> {
    return this.http.get<Owner[]>(`${this.apiUrl}?search=${criteria}`);
  }
}
