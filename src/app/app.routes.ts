import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // path: '', redirectTo: '/home', pathMatch: 'full'
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AppComponent },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
