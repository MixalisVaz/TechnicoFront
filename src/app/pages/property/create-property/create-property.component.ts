import { Component } from '@angular/core';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.scss']
})
export class CreatePropertyComponent {
  property = {
    ownerVatNumber: '',
    propertyIdentificationE9Number: '',
    address: '',
    propertyType: 'Residential',
    yearOfConstruction: null
  };

  constructor() {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Property Submitted:', this.property);
      // Εδώ μπορείς να κάνεις POST στο backend
    } else {
      console.log('Form is invalid');
    }
  }
}

