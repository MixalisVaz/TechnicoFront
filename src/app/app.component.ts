import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from "./Shared/header/header.component";
import { ReactiveFormsModule } from '@angular/forms';
import { OwnerComponent } from "./pages/owner/owner.component";

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, ReactiveFormsModule, OwnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechnicoFront';
}
