import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyService } from '../../../service/propertyService.service';
import { PropertyType } from '../../../domain/propertyType.enum';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/AuthService.service';


@Component({
  selector: 'app-create-property',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.scss']
})
export class CreatePropertyComponent {
  createPropertyForm: FormGroup;
  componentType? : "ADMIN" | "PROPERTY_OWNER"
  propertyTypeOptions = Object.keys(PropertyType).map((key) => ({
    key,
    value: PropertyType[key as keyof typeof PropertyType]
  }));
  

  constructor(private fb: FormBuilder, private propertyService: PropertyService, public router: Router,private authService:AuthService,) {
    
    this.createPropertyForm = this.fb.group({
      propertyIdentificationE9Number: ['', [Validators.required]],
      address: ['', [Validators.required]],
      yearOfConstruction: ['', [Validators.required, Validators.pattern('^\\d{4}$')]],
      propertyType: ['', [Validators.required]],
      ownerId: ['', [Validators.required]],
    });
    
    this.componentType=this.authService.getRole();
    if(this.componentType==="PROPERTY_OWNER"){
      this.createPropertyForm.get("ownerId")?.clearValidators();
  }
  }

  getFromForm(){
    if(this.componentType==='PROPERTY_OWNER'){
      this.createPropertyForm.get("ownerId")?.setValue(this.authService.getUserId())
    }
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
              if(this.componentType==='ADMIN'){
              this.router.navigate(['properties']);
              }else
              this.router.navigate([`owners-table/${this.authService.getCurrentUserName()}`])
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

