// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RepairService } from '../../service/repair.service';

// @Component({
//   selector: 'app-create-repair',
//   templateUrl: './create-repair.component.html',
//   styleUrls: ['./create-repair.component.scss']
// })
// export class CreateRepairComponent {
//   createRepairForm: FormGroup;

//   constructor(private fb: FormBuilder, private repairService: RepairService) {
//     this.createRepairForm = this.fb.group({
//       date: ['', Validators.required],
//       status: ['', Validators.required],
//       type: ['', Validators.required],
//       cost: ['', [Validators.required, Validators.min(0)]],
//       address: ['', Validators.required],
//       ownerId: ['', Validators.required],
//       description: ['']
//     });
//   }

//   onSubmit(): void {
//     if (this.createRepairForm.valid) {
//       this.repairService.createRepair(this.createRepairForm.value).subscribe({
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
