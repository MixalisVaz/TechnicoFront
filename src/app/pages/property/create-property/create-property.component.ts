import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyService } from '../../../service/propertyService.service';
import { PropertyType } from '../../../domain/propertyType.enum';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-property',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.scss']
})
export class CreatePropertyComponent {
  createPropertyForm: FormGroup;
  
  propertyTypeOptions = Object.keys(PropertyType).map((key) => ({
    key,
    value: PropertyType[key as keyof typeof PropertyType]
  }));
  

  constructor(private fb: FormBuilder, private propertyService: PropertyService, public router: Router) {
    
    this.createPropertyForm = this.fb.group({
      propertyIdentificationE9Number: ['', [Validators.required]],
      address: ['', [Validators.required]],
      yearOfConstruction: ['', [Validators.required, Validators.pattern('^\\d{4}$')]],
      propertyType: ['', [Validators.required]],
      ownerId: ['', [Validators.required]],
    
    });
  }

  getFromForm(){
    return { 
      ...this.createPropertyForm.value,
      owner:{
        id: this.createPropertyForm.get("ownerId")?.value
      }
    }
  }

  onSubmit(): void {
    console.log(this.getFromForm())
    if (this.createPropertyForm.valid) {
      console.log("giati")
           this.propertyService.createProperty(this.getFromForm()).subscribe({
            next: (response) => {
              console.log('Property created successfully', response);
              this.router.navigate(['properties']);
            },
             error: (error) => {
               console.error('Error creating property', error);
              }
            });
      } else {
        console.error('Form is invalid');
      }
    }
}

