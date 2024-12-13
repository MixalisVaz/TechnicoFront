import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {
  images: string[] = [
    'assets/Living20Room_BridgeSt-06_V2_web.jpg',
    'assets/assets/Ap3m4SRPcE2YwhtrMQ6bh3.jpg',
    'assets/reath.jpg'
  ];
  currentImageIndex = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => this.nextImage(), 3000);
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
