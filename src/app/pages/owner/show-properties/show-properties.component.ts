import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Property } from '../../../domain/property';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyrepairService } from '../../../service/property-repair.service';
import { PropertyService } from '../../../service/propertyService.service';

@Component({
  selector: 'app-show-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-properties.component.html',
  styleUrl: './show-properties.component.scss'
})
export class ShowPropertiesComponent {

properties:Property[] = [];
vatNumber!:number;

constructor(
  private route: ActivatedRoute, 
  public router: Router, 
  private propertyService: PropertyService ) {}


  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.vatNumber = +this.route.snapshot.paramMap.get('vatNumber')!;
    console.log(`Fetching properties for vatNumber: ${this.vatNumber}`);
    
    this.propertyService.getPropertiesByOwnerVatNumber(this.vatNumber).subscribe((data: Property[]) => {
      this.properties = data;
      console.log(data);
    });
  }

  onUpdate(propertyId:number): void {
    this.router.navigate([`/properties/${propertyId}/update`]);
    this.loadProperties();
  }

  onDelete(propertyId: number): void {
    if (confirm('Are you sure you want to delete this repair?')) {
      this.propertyService.deleteProperty(propertyId).subscribe(() => {
        alert('Repair deleted successfully!');
        this.loadProperties(); 
      });
    }
  }

}
