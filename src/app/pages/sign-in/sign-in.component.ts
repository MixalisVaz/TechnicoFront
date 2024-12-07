import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/AuthService.service';

@Component({
    selector: 'app-sign-in',
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    credentials = { username: '', password: '' };
    errorMessage: string | null = null;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        this.authService.login(this.credentials).subscribe({
            next: (response) => {
                if (response.role === 'ADMIN') {
                    this.router.navigate([`/admin`]); 
                } else if (response.role === 'OWNER') {
                    this.router.navigate([`/owner-page`]);
                } else {
                    this.errorMessage = 'Invalid credentials!';
                }
            },
            error: () => {
                this.errorMessage = 'Login failed. Please try again.';
            }
        });
    }
}

