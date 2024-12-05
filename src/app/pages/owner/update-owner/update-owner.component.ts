import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../../../service/owner-service.service';

@Component({
  selector: 'app-update-owner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.scss']
})
export class UpdateOwnerComponent implements OnInit {
  ownerForm: FormGroup;
  ownerId: string = '';

  constructor(
    private fb: FormBuilder,
    private ownerService: OwnerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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

  ngOnInit(): void {
    this.ownerId = this.route.snapshot.paramMap.get('id')!;
    this.ownerService.getOwnerById(this.ownerId).subscribe({
      next: (owner) => {
        this.ownerForm.patchValue(owner); // Προσθήκη των δεδομένων στη φόρμα
      },
      error: (error) => {
        console.error('Error fetching owner details', error);
      }
    });
  }
  
  onSubmit(): void {
    if (this.ownerForm.valid) {
      this.ownerService.updateOwner(this.ownerId, this.ownerForm.value).subscribe({
        next: () => {
          alert('Owner updated successfully!');
          this.router.navigate(['/owners/search']);
        },
        error: (error) => {
          console.error('Error updating owner', error);
        }
      });
    } else {
      alert('Please fill out the form correctly before submitting.');
    }
  }
  

  onDelete(): void {
    if (confirm('Are you sure you want to delete this owner?')) {
      this.ownerService.deleteOwner(this.ownerId).subscribe({
        next: () => {
          alert('Owner deleted successfully!');
          this.router.navigate(['/owners/search']);
        },
        error: (error) => {
          console.error('Error deleting owner', error);
        }
      });
    }
  }
  
}

