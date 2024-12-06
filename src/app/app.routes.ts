import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { UpdaterepairComponent } from './pages/repair/update-repair/update-repair.component';
import { UpdateOwnerComponent } from './pages/owner/update-owner/update-owner.component';
import { UpdatePropertyComponent } from './pages/property/update-property/update-property.component';
import { CreatePropertyComponent } from './pages/property/create-property/create-property.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PropertyComponent } from './pages/property/property.component';
import { ShowRepairsComponent } from './pages/property/show-repairs/show-repairs.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { RepairComponent } from './pages/repair/repair.component';
import { OwnerComponent } from './pages/owner/owner.component';
import { CreateOwnerComponent } from './pages/owner/create-owner/create-owner.component';
import { CreateRepairComponent } from './pages/repair/create-repair/create-repair.component';
import { ShowPropertiesComponent } from './pages/owner/show-properties/show-properties.component';
import { OwnersTableComponent } from './pages/owners-table/owners-table.component';

export const routes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: '', redirectTo: "home" , pathMatch: "full" },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about-us', component: AboutUsComponent },

    { path: 'repairs/:id/update', component: UpdaterepairComponent },
    { path: 'owner/:vatNumber/update', component: UpdateOwnerComponent },

    { path: 'create-owner', component: CreateOwnerComponent },
    { path: 'create-repair', component: CreateRepairComponent},
    {path: 'owners/:vatNumber/properties', component:ShowPropertiesComponent},


    {path: 'properties', component:PropertyComponent},
    {path: 'properties/new/property', component: CreatePropertyComponent},
    {path: 'properties/:id/update', component: UpdatePropertyComponent},
    {path:'properties/:id/repairs',component:ShowRepairsComponent},
    

    { path: 'sign-in', component: SignInComponent },
    { path: 'admin', component: AdministratorComponent },
    { path: 'owners-table', component: OwnersTableComponent },
    { path: 'repairs', component: RepairComponent },
    { path: 'properties', component: PropertyComponent },
    { path: 'owners', component: OwnerComponent },

        
    { path: "**", component: NotFound404Component }


];



