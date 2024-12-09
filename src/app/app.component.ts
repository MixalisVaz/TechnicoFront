import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from "./Shared/header/header.component";
import { ReactiveFormsModule } from '@angular/forms';
import { OwnerComponent } from "./pages/owner/owner.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { RepairComponent } from "./pages/repair/repair.component";
import { PropertyComponent } from "./pages/property/property.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
// import { PropertyComponent } from "./pages/property/property.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ReactiveFormsModule,], //PropertyComponent ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechnicoFront';
}


