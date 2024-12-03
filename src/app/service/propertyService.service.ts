import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:8080/technico/properties'; // Replace with actual backend URL

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
