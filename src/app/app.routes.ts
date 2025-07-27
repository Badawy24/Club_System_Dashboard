import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderListComponent as OrderListClub} from './pages/club/order-list/order-list.component';
import { RequestListComponent as RequestListClub} from './pages/club/request-list/request-list.component';
import { TransactionHistoryComponent as TransactionHistoryClub} from './pages/club/transaction-history/transaction-history.component';

import { OrderListComponent as OrderListAdmin} from './pages/admin/order-list/order-list.component';
import { RequestListComponent as RequestListAdmin} from './pages/admin/request-list/request-list.component';
import { TransactionHistoryComponent as TransactionHistoryAdmin} from './pages/admin/transaction-history/transaction-history.component';

export const routes: Routes = [
    // path: '', redirectTo: '/home', pathMatch: 'full'
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AppComponent },
    {path:'club/orders-list',component:OrderListClub},
    {path:'club/requests-list',component:RequestListClub},
    {path:'club/transaction-history',component:TransactionHistoryClub},

    {path:'admin/orders-list',component:OrderListAdmin},
    {path:'admin/requests-list',component:RequestListAdmin},
    {path:'admin/transaction-history',component:TransactionHistoryAdmin},
    
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
