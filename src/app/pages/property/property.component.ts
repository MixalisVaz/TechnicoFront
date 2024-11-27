import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../../service/propertyService';

@Component({
  selector: 'app-property',
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent  implements OnInit {
  
  propertyForm: FormGroup;
  properties: any[] = [];
  searchCriteria = '';
  
  constructor(private fb: FormBuilder, private propertyService: PropertyService) {
    this.propertyForm = this.fb.group({
      propertyId: ['', Validators.required],
      address: ['', Validators.required],
      yearBuilt: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
      vatNumber: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.getAllProperties().subscribe(
      (data: any[]) => this.properties = data,
      (error: any) => console.error('Error fetching properties:', error)
    );
  }

  createProperty() {
    if (this.propertyForm.valid) {
      this.propertyService.createProperty(this.propertyForm.value).subscribe(
        () => {
          this.loadProperties();
          this.propertyForm.reset();
        },
        (error: any) => console.error('Error creating property:', error)
      );
    }
  }

  deleteProperty(propertyId: string) {
    this.propertyService.deleteProperty(propertyId).subscribe(
      () => this.loadProperties(),
      (error: any) => console.error('Error deleting property:', error)
    );
  }

  updateProperty(property: any) {
    this.propertyForm.patchValue(property);
  }

  searchProperties() {
    if (this.searchCriteria) {
      this.propertyService.searchProperties(this.searchCriteria).subscribe(
        (data: any[]) => this.properties = data,
        (error: any) => console.error('Error searching properties:', error)
      );
    } else {
      this.loadProperties();
    }
  }
}


}
