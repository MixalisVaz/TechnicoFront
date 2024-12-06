import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyrepairService } from '../../../service/property-repair.service';

@Component({
  selector: 'app-updaterepair',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-repair.component.html',
  styleUrl: './update-repair.component.scss'
})
export class UpdaterepairComponent implements OnInit {
  repairForm: FormGroup;
  repairId: string = '';

  constructor(
    private fb: FormBuilder,
    private repairService: PropertyrepairService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.repairForm = this.fb.group({
      id: [''],
      scheduledRepairDate: [''],
      repairStatus: [''],
      repairType: [''],
      repairCost: [''],
      repairAddress: [''],
      workToBeDone: [''],
      property: [''],
    });
  }

  ngOnInit(): void {
    this.repairId = this.route.snapshot.paramMap.get('id')!;    
    this.repairService.getRepairById(this.repairId).subscribe((repair) => {
      this.repairForm.patchValue(repair);
    });
  }

  onSubmit() {
    this.repairService.updateRepair(this.repairId, this.repairForm.value).subscribe(() => {
      alert('Repair updated successfully!');
      this.router.navigate(['/repairs']);
    });
  }



}
