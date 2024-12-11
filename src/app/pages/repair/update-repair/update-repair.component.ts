import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyrepairService } from '../../../service/property-repair.service';
import { Repair } from '../../../domain/repair';
import { AuthService } from '../../../service/AuthService.service';

@Component({
  selector: 'app-updaterepair',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-repair.component.html',
  styleUrl: './update-repair.component.scss'
})
export class UpdaterepairComponent implements OnInit {
  updateRepairForm: FormGroup;
  repairId: string = '';
  repair!:Repair;
  componentType? : "ADMIN" | "PROPERTY_OWNER"
  propertyId? : string;

  constructor(
    private fb: FormBuilder,
    private repairService: PropertyrepairService,
    private route: ActivatedRoute,
    private authService:AuthService,
    private router: Router
  ) {
    this.updateRepairForm = this.fb.group({
      id: [''],
      scheduledRepairDate: [''],
      repairStatus: [''],
      repairType: [''],
      repairCost: [''],
      repairAddress: [''],
      workToBeDone: [''],
      property: [''],
    });
    this.propertyId = route.snapshot.paramMap.get('id')!;
    this.componentType=this.authService.getRole();
    if(this.componentType==="PROPERTY_OWNER"){
      this.updateRepairForm.get("propertyId")?.clearValidators();
  }
}

  getFromForm(){
    if(this.componentType==='PROPERTY_OWNER'){
      this.updateRepairForm.get("propertyId")?.setValue(this.propertyId)
    }
    return { 
      ...this.updateRepairForm.value,
      property:{
        id: this.updateRepairForm.get("propertyId")?.value
      }
    }
  }

  ngOnInit(): void {
    this.repairId = this.route.snapshot.paramMap.get('repairId')!;    
    this.repairService.getRepairById(this.repairId).subscribe((repair) => {
      this.updateRepairForm.patchValue(repair);
    });
  }

  onSubmit() {
    if (this.updateRepairForm.valid) {
    this.repairService.updateRepair(this.repairId, this.updateRepairForm.value).subscribe(() => {
      alert('Repair updated successfully!');
      if(this.componentType==='PROPERTY_OWNER'){
        this.router.navigate([`property/${this.propertyId}/update-repairs-table`]);
      }else{
      this.router.navigate(['/repairs']);
    }
    });
  }
}
}