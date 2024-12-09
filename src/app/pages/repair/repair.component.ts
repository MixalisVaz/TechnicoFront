import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyrepairService } from '../../service/property-repair.service';
import { CommonModule } from '@angular/common';
import { Repair } from '../../domain/repair';
// import { CreateRepairComponent } from './create-repair/create-repair.component';
import { UpdaterepairComponent } from './update-repair/update-repair.component';

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [CommonModule , UpdaterepairComponent ],
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss']
})
export class RepairComponent implements OnInit {
  repairs: Repair[] = [];

  constructor(public router: Router, private propertyrepairService: PropertyrepairService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.loadRepairs();
  }

  loadRepairs(): void {
    this.propertyrepairService.getRepairs().subscribe((data: any[]) => {
      this.repairs = data;
      console.log(data);
    });
  }

  onUpdate(repairId: number): void {
    this.router.navigate([`/repairs/${repairId}/update`]);
  }


  onDelete(repairId :number) {
    if (confirm('Are you sure you want to delete this repair?')) {
      this.propertyrepairService.deleteRepair(repairId).subscribe(() => {
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



