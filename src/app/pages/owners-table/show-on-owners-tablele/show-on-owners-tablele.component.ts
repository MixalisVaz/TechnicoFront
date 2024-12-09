import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyrepairService } from '../../../service/property-repair.service';
import { Repair } from '../../../domain/repair';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-repairs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-on-owners-tablele.component.html',
  styleUrl: './show-on-owners-tablele.component.scss'
})
export class ShowRepairsOnOwnersTableComponent implements OnInit{
  
  repairs: Repair[] = [];
  propertyId!:number;

  constructor(
    private route: ActivatedRoute, 
    public router: Router, 
    private repairService: PropertyrepairService ) {}
 
  ngOnInit(): void {
    this.loadRepairs();
  }


  loadRepairs(): void {
    this.propertyId = +this.route.snapshot.paramMap.get('id')!;
    console.log(`Fetching repairs for property ID: ${this.propertyId}`);
    
    this.repairService.getRepairByPropertyId(this.propertyId).subscribe((data: Repair[]) => {
      this.repairs = data;
      console.log(data);
    });
  }

  onUpdate(repairId:number): void {
    this.router.navigate([`/repair/${repairId}/update-on-show-owners-table`]); 
    this.loadRepairs();
  }

  
  onDelete(repairId: number): void {
    if (confirm('Are you sure you want to delete this repair?')) {
      this.repairService.deleteRepair(repairId).subscribe(() => {
        alert('Repair deleted successfully!');
        this.loadRepairs(); 
      });
    }
  }

  navigateToCreateRepair(){
    let propertyId = this.route.snapshot.paramMap.get('id')!;
    this.router.navigate([`property/${propertyId}/update-repairs-table/create-repair`]);
  }

}

