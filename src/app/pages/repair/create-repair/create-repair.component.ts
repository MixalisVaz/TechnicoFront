import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyrepairService } from '../../../service/property-repair.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../service/AuthService.service';

@Component({
  selector: 'app-create-repair',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-repair.component.html',
  styleUrls: ['./create-repair.component.scss']
})
export class CreateRepairComponent {
  createRepairForm: FormGroup;
  repairType = ['PAINTING', 'INSULATION', 'FRAMES', 'PLUMBING', 'ELECTRICAL_WORK'];
  repairStatus = ['PENDING', 'IN_PROGRESS', 'COMPLETE'];
  componentType? : "ADMIN" | "PROPERTY_OWNER"
  propertyId? : string;

  constructor(
    private authService:AuthService,
    private fb: FormBuilder,
    private propertyrepairService: PropertyrepairService, 
    public router: Router, route: ActivatedRoute) {
    
    this.createRepairForm = this.fb.group({
      scheduledRepairDate: ['', Validators.required],
      repairStatus: ['', Validators.required],
      repairType: ['', Validators.required],
      repairCost: ['', [Validators.required, Validators.min(0)]],
      repairAddress: ['', Validators.required],
      workToBeDone: ['', Validators.required],
      propertyId: ['',Validators.required]
    });
    
    this.propertyId = route.snapshot.paramMap.get('id')!;
    this.componentType=this.authService.getRole();
    if(this.componentType==="PROPERTY_OWNER"){
      this.createRepairForm.get("propertyId")?.clearValidators();
  }
    
  }

  

  getFromForm(){
    if(this.componentType==='PROPERTY_OWNER'){
      this.createRepairForm.get("propertyId")?.setValue(this.propertyId)
    }
    return { 
      ...this.createRepairForm.value,
      property:{
        id: this.createRepairForm.get("propertyId")?.value
      }
    }
  }

  onSubmit(): void {
    if (this.createRepairForm.valid) {
      this.propertyrepairService.createRepair(this.getFromForm()).subscribe({
        next: (response) => {
          console.log('Repair created successfully', response);
          alert('Repair created successfully!');
          if(this.componentType==='PROPERTY_OWNER'){
            this.router.navigate([`property/${this.propertyId}/update-repairs-table`]);
          }else{
            this.router.navigate(['repairs']);
          }
        },
        error: (error) => {
          console.error('Error creating repair', error);
          alert('Failed to create repair. Please try again.');
        }
      });
    } else {
      console.error('Form is invalid');
      alert('Please fill all required fields correctly.');
    }
  }
}




// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';
// import { PropertyrepairService } from '../../../service/property-repair.service';


// @Component({
//   selector: 'app-create-repair',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './create-repair.component.html',
//   styleUrls: ['./create-repair.component.scss']
// })
// export class CreateRepairComponent {
//   createRepairForm: FormGroup;
//   repairType = ['Painting', 'Insulation', 'Frames', 'Plumbing', 'Electrical Work'];
//   repairStatus = ['Pending', 'In progress', 'Complete'];

//   constructor(private fb: FormBuilder, private propertyrepairService: PropertyrepairService) {
//     this.createRepairForm = this.fb.group({
//       scheduledRepairDate: ['', Validators.required],
//       repairStatus: ['', Validators.required],
//       repairType: ['', Validators.required],
//       repairCost: ['', [Validators.required, Validators.min(0)]],
//       repairAddress: ['', Validators.required],
//       workToBeDone: ['', Validators.required],
//       property: ['']
//     });
//   }

//   onSubmit(): void {
//     if (this.createRepairForm.valid) {
//       this.propertyrepairService.createRepair(this.createRepairForm.value).subscribe({
//         next: (response) => {
//           console.log('Repair created successfully', response);
//           this.createRepairForm.reset();
//         },
//         error: (error) => {
//           console.error('Error creating repair', error);
//         }
//       });
//     } else {
//       console.error('Form is invalid');
//     }
//   }
// }
