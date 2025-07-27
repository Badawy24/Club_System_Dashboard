import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderListComponent } from './pages/club/order-list/order-list.component';
import { RequestListComponent } from './pages/club/request-list/request-list.component';
import { TransactionHistoryComponent } from './pages/club/transaction-history/transaction-history.component';

export const routes: Routes = [
    // path: '', redirectTo: '/home', pathMatch: 'full'
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AppComponent },
    {path:'club/orders-list',component:OrderListComponent},
    {path:'club/requests-list',component:RequestListComponent},
    {path:'club/transaction-history',component:TransactionHistoryComponent},
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
