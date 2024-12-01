import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.scss']
})
export class UpdatePropertyComponent implements OnInit {
  property: {
    id: string;
    ownerVatNumber: string;
    propertyIdentificationE9Number: string;
    address: string;
    propertyType: string;
    yearOfConstruction: number | null;
  } = {
    id: '',
    ownerVatNumber: '',
    propertyIdentificationE9Number: '',
    address: '',
    propertyType: 'Residential',
    yearOfConstruction: null
  };

  constructor() {}

  ngOnInit(): void {
    // Εδώ μπορείς να φορτώσεις τα δεδομένα του property από το backend
    this.property = {
      id: '12345',
      ownerVatNumber: '0987654321',
      propertyIdentificationE9Number: 'E9-001',
      address: '456 Main St',
      propertyType: 'Commercial',
      yearOfConstruction: 2005
    };
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Property Updated:', this.property);
      // Εδώ μπορείς να κάνεις PUT στο backend
    } else {
      console.log('Form is invalid');
    }
  }
}
