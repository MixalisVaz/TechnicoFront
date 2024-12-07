import { Component, OnInit } from '@angular/core';
import { TableOwnerService } from '../../service/TableOwner.service';
import { AuthService } from '../../service/AuthService.service';
import { CommonModule } from '@angular/common';
import { Property } from '../../domain/property';
import { Router } from '@angular/router';
import { Repair } from '../../domain/repair';
import { PropertyService } from '../../service/propertyService.service';


@Component({
  selector: 'app-owners-table',
  imports: [CommonModule],
  templateUrl: './owners-table.component.html',
  styleUrls: ['./owners-table.component.scss']
})
export class OwnersTableComponent implements OnInit {

  properties: Property[] = []; 
  repairs: Repair[] = []; 
  selectedPropertyId: number | null = null;
  errorMessage: string | null = null;

  constructor(public router:Router , private tableOwnerService: TableOwnerService, private authService: AuthService) {}


  ngOnInit(): void {
    const vatNumber = this.authService.getCurrentVatNumber();

    if (vatNumber) {
        this.tableOwnerService.getPropertiesByOwner(vatNumber).subscribe({
            next: (response) => {
                this.properties = response;
            },
            error: () => {
                this.errorMessage = 'Failed to load properties. Please try again.';
            }
        });
    } else {
        this.errorMessage = 'No user logged in.';
    }
}



  viewRepairs(propertyId: number): void {
    this.router.navigate([`/properties/${propertyId}/repairs`])
  }

  updateProperty(propertyId: number): void {
    this.router.navigate([`/properties/${propertyId}/update`])
  };


  deleteProperty(propertyId: number): void {
    this.tableOwnerService.deleteProperty(propertyId).subscribe({
      next: () => {
        this.properties = this.properties.filter((prop) => prop.id !== propertyId);
        alert('Property deleted successfully');
      },
      error: () => {
        alert('Failed to delete property');
      }
    });
  }
}
