import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../service/propertyService.service';
import { HeaderComponent } from "../../Shared/header/header.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { CommonModule } from '@angular/common';
import { Property } from '../../domain/property';
import { Router } from '@angular/router';
import { OwnerService } from '../../service/owner-service.service';
import { PropertyrepairService } from '../../service/property-repair.service';
import { RepairComponent } from '../repair/repair.component';
import { Repair } from '../../domain/repair';


@Component({
  selector: 'app-property',
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent  implements OnInit {

  properties: any[] = []; 
  repairs: any[] = []; 
  selectedPropertyId: number | null = null;

  
  constructor(private router:Router, private propertyService: PropertyService) {}

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.getAllProperties().subscribe((data: any[]) => {
      this.properties = data;
      console.log(data);
  });
  }

  viewPropertyRepairs(propertyId: number) {
    this.selectedPropertyId = propertyId;

    this.propertyService.getRepairsByPropertyId(propertyId).subscribe({
      next: (repairs: any[]) => {
        this.repairs = repairs;
        console.log('Repairs for property ID:', propertyId, repairs);
      
  }
});
  }


  createProperty() {
      this.propertyService.createProperty().subscribe(
        () => {
          this.loadProperties();
        });
    }
  }

  editProperty(propertyId: number): void {
    this.router.navigate([`/properties/${propertyId}/update`]);
  }

  deleteProperty(propertyId: number) {
    this.propertyService.deleteProperty(propertyId).subscribe(
      () => this.loadProperties(),
      (error: any) => console.error('Error deleting property:', error)
    );
  }

  


  searchProperties() {
      this.propertyService.searchProperties(this.searchCriteria).subscribe(
        (data: any[]) => this.properties = data,
        (error: any) => console.error('Error searching properties:', error)
      );
  }




