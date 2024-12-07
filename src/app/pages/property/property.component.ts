import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../service/propertyService.service';
import { CommonModule } from '@angular/common';
import { Property } from '../../domain/property';
import { Router } from '@angular/router';
import { Repair } from '../../domain/repair';


@Component({
  selector: 'app-property',
  imports: [CommonModule],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent  implements OnInit {

  properties: Property[] = []; 
  repairs: Repair[] = []; 
  selectedPropertyId: number | null = null;
  
  constructor(public router:Router, private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.propertyService.getAllProperties().subscribe((data: any[]) => {
      this.properties = data;
      console.log(data);
      console.log("ok");
  });
  }

  viewPropertyRepairs(propertyId: number): void {
    this.router.navigate([`/properties/${propertyId}/repairs`])
  }


  editProperty(propertyId: number): void {
    this.router.navigate([`/properties/${propertyId}/update`])};
  
    
  deleteProperty(propertyId: number): void {
    if (confirm('Are you sure you want to delete this property?')) {
    this.propertyService.deleteProperty(propertyId).subscribe(() => {
        alert('Repair deleted successfully!');
        this.loadProperties();   
      });
  }
}

  createProperty(property:Property): void {
      this.propertyService.createProperty(property).subscribe(
        () => {
          this.loadProperties();
        });
    }
  
  // searchProperties() {
  //     this.propertyService.searchProperties().subscribe((data: any[]) => {this.properties = data;
  //       console.log(data);
  // });

  // }

  
}
