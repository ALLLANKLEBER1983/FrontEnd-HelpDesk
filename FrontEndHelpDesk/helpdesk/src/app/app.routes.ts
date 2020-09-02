import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/security/login/login.component';
import { ModuleWithProviders } from "@angular/core";

export const ROUTES: Routes = [
    {path : '', component: HomeComponent},
    {path : 'login', component: LoginComponent}

]

export const routes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROUTES);

