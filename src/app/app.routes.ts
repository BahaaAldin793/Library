import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"login", component:LogInComponent},
    {path:"signUp", component:RegisterComponent},
    {path:"home", component:HomeComponent}
];



