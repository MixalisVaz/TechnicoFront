import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwnerService } from '../../service/owner-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Owner } from '../../domain/owner';

@Component({
  selector: 'app-owner',
  standalone: true, 
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.scss'
})
export class OwnerComponent implements OnInit {
  
  ownerForm: FormGroup;
  owners: Owner[] = [];
  searchCriteria = '';

  constructor(private fb: FormBuilder, private ownerService: OwnerService) {
    this.ownerForm = this.fb.group({
      vatNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      propertyType: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadOwners();
  }

  loadOwners() {
    this.ownerService.getAllOwners().subscribe(
      (data: Owner[]) => this.owners = data,
      (error: any) => console.error('Error fetching owners:', error)
    );
  }

  createOwner() {
    if (this.ownerForm.valid) {
      const newOwner = new Owner(
        this.ownerForm.value.vatNumber,
        this.ownerForm.value.name,
        this.ownerForm.value.surname,
        this.ownerForm.value.address,
        this.ownerForm.value.phoneNumber,
        this.ownerForm.value.email,
        this.ownerForm.value.username,
        this.ownerForm.value.password,
        this.ownerForm.value.propertyType
      );

      this.ownerService.createOwner(newOwner).subscribe(
        () => {
          this.loadOwners();
          this.ownerForm.reset();
        },
        (error: any) => console.error('Error creating owner:', error)
      );
    }
  }

  deleteOwner(vatNumber: string) {
    this.ownerService.deleteOwner(vatNumber).subscribe(
      () => this.loadOwners(),
      (error: any) => console.error('Error deleting owner:', error)
    );
  }

  updateOwner(owner: Owner) {
    this.ownerForm.patchValue(owner);
  }

  searchOwners() {
    if (this.searchCriteria) {
      this.ownerService.searchOwners(this.searchCriteria).subscribe(
        (data: Owner[]) => this.owners = data,
        (error: any) => console.error('Error searching owners:', error)
      );
    } else {
      this.loadOwners();
    }
  }
}