import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-page',
  imports: [],
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.scss'
})
export class OwnerPageComponent {
  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
