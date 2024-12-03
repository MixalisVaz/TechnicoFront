import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { UpdaterepairComponent } from './pages/repair/update-repair/update-repair.component';
import { UpdatePropertyComponent } from './pages/property/update-property/update-property.component';
import { CreatePropertyComponent } from './pages/property/create-property/create-property.component';

export const routes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: '', redirectTo: "home" , pathMatch: "full" },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'repairs/:id/update', component: UpdaterepairComponent },
    {path: 'properties/create', component: CreatePropertyComponent},
    {path: 'properties/:id/update', component: UpdatePropertyComponent},
    
    { path: "**", component: NotFound404Component }


];



