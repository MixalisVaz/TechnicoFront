import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../service/AuthService.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.listenForLogin().subscribe((answer:boolean) => {
      this.isLoggedIn = this.authService.isLoggedIn(); 
    })
  } 



navigateHome() {
  if (this.authService.isLoggedIn()) {
    const role = this.authService.getRole();
    if (role === 'ADMIN') {
        this.router.navigate(['admin']);
    } else if (role === 'PROPERTY_OWNER') {
        this.router.navigate(['owners-table', this.authService.getCurrentUserName()]);
    }
  } else {
    this.router.navigate(['home']); 
  }
}


  logout(): void {
    this.authService.logout();
  }

  // isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn();
  // }

}
