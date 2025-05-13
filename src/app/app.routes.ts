import { Routes } from '@angular/router';
import { PropertiesComponentComponent } from './components/properties-component/properties-component.component';
import { OwnersComponentComponent } from './components/owners-component/owners-component.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { HomeComponent } from './ui/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: 'properties', component: PropertiesComponentComponent},
    {path: 'owners', component: OwnersComponentComponent},
    {path: 'sidebar', component: SidebarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
];
