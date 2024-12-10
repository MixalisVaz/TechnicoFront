import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OwnerService } from '../../../service/owner-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-owner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent {
  createOwnerForm: FormGroup;

  constructor(private fb: FormBuilder, private ownerService: OwnerService, public router: Router) {
    this.createOwnerForm = this.fb.group({
      vatNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      role: ['PROPERTY_OWNER', Validators.required], 
      properties: ['', Validators.required] 
    });
  }

  getFromForm() {
    const formValue = this.createOwnerForm.value;
    return {
      ...formValue,
      properties: [formValue.properties] 
    };
  }

  onSubmit(): void {
    if (this.createOwnerForm.valid) {
      const formattedData = this.getFromForm();
      this.ownerService.createOwner(formattedData).subscribe({
        next: (response) => {
          console.log('Owner created successfully', response);
          alert('Owner created successfully!');
          this.router.navigate(['owners']);
        },
        error: (error) => {
          console.error('Error creating owner', error);
          alert('Failed to create owner.');
        }
      });
    } else {
      alert('Please fill out the form correctly before submitting.');
    }
  }
}
