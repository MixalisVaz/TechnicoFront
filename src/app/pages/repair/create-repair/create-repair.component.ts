import { Component } from '@angular/core';

@Component({
  selector: 'app-create-repair',
  templateUrl: './create-repair.component.html',
  styleUrls: ['./create-repair.component.scss']
})
export class CreateRepairComponent {
  repair = {
    repairDate: '',
    repairType: '',
    repairStatus: 'Pending',
    repairCost: null,
    repairAddress: '',
    description: ''
  };

  constructor() {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Repair Submitted:', this.repair);
      // Εδώ μπορείτε να κάνετε POST στο backend
    } else {
      console.log('Form is invalid');
    }
  }
}
