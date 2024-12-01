import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-repair',
  templateUrl: './update-repair.component.html',
  styleUrls: ['./update-repair.component.scss']
})
export class UpdateRepairComponent implements OnInit {
  repair: {
    id: string;
    repairDate: string;
    repairType: string;
    repairStatus: string;
    repairCost: number | null; 
    repairAddress: string;
    description: string;
  } = {
    id: '',
    repairDate: '',
    repairType: '',
    repairStatus: 'Pending',
    repairCost: null,
    repairAddress: '',
    description: ''
  };

  constructor() {}

  ngOnInit(): void {
    this.repair = {
      id: '12345',
      repairDate: '2024-12-01T12:00',
      repairType: 'Painting',
      repairStatus: 'In Progress',
      repairCost: 500, 
      repairAddress: '123 Main St',
      description: 'Repairing the roof'
    };
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Repair Updated:', this.repair);
      
    } else {
      console.log('Form is invalid');
    }
  }
}
