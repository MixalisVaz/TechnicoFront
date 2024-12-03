import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:8080/technico/properties'; 

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createProperty(property: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, property);
  }
  getPropertyById(propertyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${propertyId}`);
  }
  deleteProperty(propertyId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${propertyId}`);
  }
  searchProperties(criteria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?search=${criteria}`);
  }
  updateProperties(id: number, property: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, property);
  }
  getRepairsByPropertyId(propertyId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/repairs?propertyId=${propertyId}`);
  }
}