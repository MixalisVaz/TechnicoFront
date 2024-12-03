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
  styleUrl: './update-repair.component.css'
})
export class UpdaterepairComponent implements OnInit {
  repairForm: FormGroup;
  repairId: string = '';
  updateForm!: FormGroup<any>;

  constructor(
    private fb: FormBuilder,
    private repairService: PropertyrepairService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.repairForm = this.fb.group({
      date: [''],
      status: [''],
      type: [''],
      cost: [''],
      address: [''],
      owner: [''],
      description: [''],
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
      this.router.navigate(['/propertyrepair/search']);
    });
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this repair?')) {
      this.repairService.deleteRepair(this.repairId).subscribe(() => {
        alert('Repair deleted successfully!');
        this.router.navigate(['/propertyrepair/search']);
      });
    }
  }

}
