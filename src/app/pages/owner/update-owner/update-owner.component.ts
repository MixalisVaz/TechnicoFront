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
  vatNumber? : string;

  constructor(
    private fb: FormBuilder,
    private ownerService: OwnerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ownerForm = this.fb.group({
      userName: [''],
      password: [''],
      vatNumber: [''],
      firstName: [''],
      lastName: [''],
      address: [''],
      phoneNumber: [''],
      email: [''],      
    });
  }

  // ngOnInit(): void {
  //   this.ownerId = this.route.snapshot.paramMap.get('id')!;
  //   this.ownerService.getOwnerById(this.ownerId).subscribe({
  //     next: (owner) => {
  //       this.ownerForm.patchValue(owner); 
  //     },
  //     error: (error) => {
  //       console.error('Error fetching owner details', error);
  //     }
  //   });
  // }
  
  ngOnInit(): void {
    this.vatNumber = this.route.snapshot.paramMap.get('vatNumber')!;
    this.ownerService.getOwnerByVatNumber(this.vatNumber).subscribe({
      next: (owner) => {
        this.ownerForm.patchValue(owner); 
      },
      error: (error) => {
        console.error('Error fetching owner details', error);
      }
    });
  }

  onSubmit(): void {
    if (this.ownerForm.valid) {
      this.ownerService.updateOwner(this.vatNumber!, this.ownerForm.value).subscribe({ // vatNumber
        next: () => {
          alert('Owner updated successfully!');
          this.router.navigate(['owners']);
        },
        error: (error) => {
          console.error('Error updating owner', error);
        }
      });
    } else {
      alert('Please fill out the form correctly before submitting.');
    }
  }
  


  
}

