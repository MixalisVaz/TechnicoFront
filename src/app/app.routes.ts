import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';

export const routes: Routes = [
    {
        path: "",
        component: HomepageComponent
    },
    { 
        path: "about-us", 
        component: AboutUsComponent
    },
    {
        path: "**",
        component: NotFound404Component
    }

];
