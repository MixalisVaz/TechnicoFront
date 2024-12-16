import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from "./Shared/header/header.component";
import { ReactiveFormsModule } from '@angular/forms';
// import { SnowEffectComponent } from './Shared/snow-effect/snow-effect.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ReactiveFormsModule,],//SnowEffectComponent,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechnicoFront';
}


