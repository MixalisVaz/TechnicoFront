import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  images: string[] = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg'
  ];

  currentIndex: number = 0;

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}