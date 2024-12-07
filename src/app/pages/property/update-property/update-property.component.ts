import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyService } from '../../../service/propertyService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../../domain/property';

@Component({
  selector: 'app-update-property',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.scss']
})
export class UpdatePropertyComponent implements OnInit {

  propertyForm: FormGroup;
  propertyId: number = 0; 
  property!: Property;

  constructor( 
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router) {

      this.propertyForm = this.fb.group({
        propertyIdentificationE9Number: ['', [Validators.required]],
        address: ['', [Validators.required]],
        yearOfConstruction: ['', [Validators.required, Validators.pattern('^\\d{4}$')]],
        propertyType: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.propertyId = Number(id); // Convert to number
    } else {
      console.warn('No property ID provided in route');
    }

    if (this.propertyId) {
      this.propertyService.getPropertyById(this.propertyId).subscribe({
        next: (property) => {
          this.propertyForm.patchValue(property); 
        },
        error: (error) => {
          console.error('Error fetching property details', error);
        }
      });
    }
  }

  onSubmit(): void {
    let propertyId = this.route.snapshot.paramMap.get('id')!;
    if (this.propertyForm.valid) {
      const updatedProperty = this.propertyForm.value;
      console.log('Property Updated:', updatedProperty);
      this.propertyService.updateProperty(updatedProperty, propertyId).subscribe({
        next: () => {
          console.log('Property successfully updated!');
          this.router.navigate(['/properties']);
        },
        error: (error) => {
          console.error('Error updating property:', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this property?')) {
      this.propertyService.deleteProperty(this.propertyId).subscribe({
        next: () => {
          alert('Property deleted successfully!');
          this.router.navigate(['/properties/search']);
        },
        error: (error) => {
          console.error('Error deleting property', error);
        }
      });
    }
  }


  // updateProperty(propertyId: number): void {
  //   this.router.navigate([`/properties/${propertyId}/update`]);
  // }

  

}
