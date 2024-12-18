import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repair } from '../domain/repair';

@Injectable({
  providedIn: 'root'
})
export class PropertyrepairService {
  private baseUrl = 'http://localhost:8080/technico/repairs'; 

  constructor(private http: HttpClient) { }

  createRepair(repair: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/new/repair`, repair);
  }

  getRepairs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getRepairById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateRepair(id: string, repair: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, repair);
  }

  deleteRepair(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
  getRepairByPropertyId(id:number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/propertyId/${id}`)
  }
  
  deleteRepairByPropertyId(id:number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/property/${id}`)
  }

}

