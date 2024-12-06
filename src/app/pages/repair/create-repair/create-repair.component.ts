import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyrepairService } from '../../../service/property-repair.service';

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

  constructor(private fb: FormBuilder, private propertyrepairService: PropertyrepairService) {
    this.createRepairForm = this.fb.group({
      scheduledRepairDate: ['', Validators.required],
      repairStatus: ['', Validators.required],
      repairType: ['', Validators.required],
      repairCost: ['', [Validators.required, Validators.min(0)]],
      repairAddress: ['', Validators.required],
      workToBeDone: ['', Validators.required],
      // property: [''],
    });
  }

  onSubmit(): void {
    if (this.createRepairForm.valid) {
      this.propertyrepairService.createRepair(this.createRepairForm.value).subscribe({
        next: (response) => {
          console.log('Repair created successfully', response);
          alert('Repair created successfully!');
          this.createRepairForm.reset();
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
