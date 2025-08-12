import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { UserProfileComponent } from '../layout/navbar/user-profile/user-profile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    UserProfileComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'dashboard-app';
   userType: string | null = null;

  ngOnInit() {
    const encryptedType = localStorage.getItem('user_type');
    if (encryptedType) {
      this.userType = atob(encryptedType);
    }
  }
}
