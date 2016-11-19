import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app.guard';

import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';


const appRoutes: Routes= [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }
]

export const appRouteProviders: any[]= [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);