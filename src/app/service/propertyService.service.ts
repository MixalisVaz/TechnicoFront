import { Inject,Injectable, inject } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../domain/property';
import { Repair } from '../domain/repair';


@Injectable({
  providedIn: 'root'
})

export class PropertyService {
   
   http=inject(HttpClient);
   private apiUrl = 'http://localhost:8080/technico/properties';

  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl);
  }

  createProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(`${this.apiUrl}/create`, property);
  }

  getPropertyById(propertyId: number): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/${propertyId}`);
  }

  deleteProperty(propertyId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${propertyId}`);
  }

  searchProperties(criteria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?search=${criteria}`);
  }

  updateProperty(property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.apiUrl}/${property.id}`, property)
  }

  getRepairsByPropertyId(propertyId: number): Observable<Repair[]> {
    return this.http.get<Repair[]>(`${this.apiUrl}/repairs?propertyId=${propertyId}`);
  }
}