import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../../service/owner-service.service';
import { CommonModule } from '@angular/common';
import { Owner } from '../../domain/owner';
import { CreateOwnerComponent } from './create-owner/create-owner.component';
import { UpdateOwnerComponent } from './update-owner/update-owner.component';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [CommonModule,CreateOwnerComponent, UpdateOwnerComponent],
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  owners: Owner[] = [];

  constructor(public router: Router, private ownerService: OwnerService) {}

  ngOnInit(): void {
    this.loadOwners();
  }

  loadOwners(): void {
    this.ownerService.getOwners().subscribe((data: Owner[]) => {
      this.owners = data;
      console.log(data);
    });
  }


  
  onUpdate(ownervatNumber: string): void {
    this.router.navigate([`/owner/${ownervatNumber}/update`]);
  }

}
