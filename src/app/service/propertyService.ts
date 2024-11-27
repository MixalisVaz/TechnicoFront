import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:4200/properties'; // Replace with actual backend URL

  constructor(private http: HttpClient,private router: Router) {}

  getAllProperties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createProperty(property: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, property);
  }

  deleteProperty(propertyId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${propertyId}`);
  }
  searchProperties(criteria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?search=${criteria}`);
  }

  /**
   * Method to navigate to the edit property page.
   * @param id - The ID of the property to edit.
   */
  editProperty(id: Number): void {
    // Navigate to the edit property page with the property ID as a parameter
    this.router.navigate(['/edit-property', id]);
  }
}
