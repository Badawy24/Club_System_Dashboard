import { Routes } from '@angular/router';
import { OrderListComponent as OrderListClub } from './pages/club/order-list/order-list.component';
import { RequestListComponent as RequestListClub } from './pages/club/request-list/request-list.component';
import { TransactionHistoryComponent as TransactionHistoryClub } from './pages/club/transaction-history/transaction-history.component';
import { TrainerComponent as TrainerComponentClub } from './pages/club/trainer/trainer.component';
import { SportsComponent as SportsComponentClub } from './pages/club/sports/sports.component';

import { OrderListComponent as OrderListAdmin } from './pages/admin/order-list/order-list.component';
import { RequestListComponent as RequestListAdmin } from './pages/admin/request-list/request-list.component';
import { TransactionHistoryComponent as TransactionHistoryAdmin } from './pages/admin/transaction-history/transaction-history.component';



import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { MainpageComponent } from './dashboard/mainpage/mainpage.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ConfirmChangePasswordComponent } from './auth/confirm-change-password/confirm-change-password.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { OtpForgetComponent } from './auth/otp-forget/otp-forget.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // Auth Routes
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
      { path: 'forget-otp', component: OtpForgetComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'confirm-change-password', component: ConfirmChangePasswordComponent },
      { path: 'verify-otp', component: VerificationComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },

  // Dashboard Routes
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      // Club Routes
      { path: '', component: MainpageComponent },
      // { path: 'dashboard', component: DashboardComponent },
      { path: 'club/orders-list', component: OrderListClub },
      { path: 'club/requests-list', component: RequestListClub },
      { path: 'club/transaction-history', component: TransactionHistoryClub },
      { path: 'club/trainer', component: TrainerComponentClub },
      { path: 'club/sports', component: SportsComponentClub },

      // Admin Routes
      { path: 'admin/orders-list', component: OrderListAdmin },
      { path: 'admin/requests-list', component: RequestListAdmin },
      { path: 'admin/transaction-history', component: TransactionHistoryAdmin },
    ],
  },

  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];
