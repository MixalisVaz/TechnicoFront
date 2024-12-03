import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyrepairService } from '../../service/property-repair.service';
import { CommonModule } from '@angular/common';
import { Repair } from '../../domain/repair';

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss']
})
export class RepairComponent implements OnInit {
  repairs: Repair[] = [];

  constructor(private router: Router, private propertyrepairService: PropertyrepairService) {}

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
}
