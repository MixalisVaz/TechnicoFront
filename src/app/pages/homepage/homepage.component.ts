import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  images: string[] = [
    'assets/Gauthier.jpg',
    'assets/18-projects-that-highlight-current-cities-and-living-trends_7.jpg',
    'assets/28-Benedict-Canyon-Beverly-Hills-Luxury-Home-Primary-Bathroom-Marble-Shower-Vanity-and-Soaking-Tub.jpg',
    'assets/Ap3m4SRPcE2YwhtrMQ6bh3.jpg',
    'assets/emmachamberlain.jpg',
    'assets/HolmbergResidenceSummer2023.jpg',
    'assets/interiors-of-the-future-17-projects-that-show-how-current-cities-and-living-trends-are-influencing-modern-interior-architecture_19.jpg',
    'assets/Living20Room_BridgeSt-06_V2_web.jpg',
    'assets/reath.jpg',
    'assets/KAID-02 (1).jpg'
  ];
  
  currentIndex: number = 0;

  ngOnInit(): void {
    // Automatically change the image every 3 seconds
    setInterval(() => this.nextImage(), 3000);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
