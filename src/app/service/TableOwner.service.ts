import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableOwnerService {
  private baseUrl = 'http://localhost:8080/technico/properties'; 

  constructor(private http: HttpClient) {}

  getPropertiesByOwner(vatNumber: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/owner/${vatNumber}`);
}

  deleteProperty(propertyId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${propertyId}`);
  }

  updateProperty(propertyId: number, updatedProperty: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${propertyId}/update`, updatedProperty);
  }
  


}
