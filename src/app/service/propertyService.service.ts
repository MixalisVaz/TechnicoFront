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




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface Repair {
//   id: string;
//   date: string;
//   status: string;
//   type: string;
//   cost: number;
//   address: string;
//   owner: string;
//   description: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class RepairService {
//   private baseUrl = 'http://localhost:3000/repairs'; // Adjust URL based on your backend

//   constructor(private http: HttpClient) {}

//   /**
//    * Get all repairs
//    */
//   getRepairs(): Observable<Repair[]> {
//     return this.http.get<Repair[]>(this.baseUrl);
//   }

//   /**
//    * Get repair by ID
//    * @param id Repair ID
//    */
//   getRepairById(id: string): Observable<Repair> {
//     return this.http.get<Repair>(`${this.baseUrl}/${id}`);
//   }

//   /**
//    * Update a repair
//    * @param id Repair ID
//    * @param repair Updated repair data
//    */
//   updateRepair(id: string, repair: Partial<Repair>): Observable<void> {
//     return this.http.put<void>(`${this.baseUrl}/${id}`, repair);
//   }

//   /**
//    * Delete a repair
//    * @param id Repair ID
//    */
//   deleteRepair(id: string): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/${id}`);
//   }
// }
