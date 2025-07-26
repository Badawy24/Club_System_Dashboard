import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  
  logo:string = "assets/logo.png";

  icons:{ [key: string]: string } = {
    dashboard:"assets/sidebar-icons/dashboard.svg",
    trainer:"assets/sidebar-icons/trainer.svg",
    user:"assets/sidebar-icons/user.svg",
    clubs:"assets/sidebar-icons/clubs.svg",
    orders:"assets/sidebar-icons/orders.svg",
    sport:"assets/sidebar-icons/sport.svg",
    request:"assets/sidebar-icons/request.svg",
    earning:"assets/sidebar-icons/earning.svg",
    session:"assets/sidebar-icons/session.svg",
    logout:"assets/sidebar-icons/logout.svg",
  };
  iconsActive:{ [key: string]: string } = {
    dashboard:"assets/sidebar-icons-active/dashboard.svg",
    trainer:"assets/sidebar-icons-active/trainer.svg",
    session:"assets/sidebar-icons-active/session.svg",
    request:"assets/sidebar-icons-active/request.svg",
    orders:"assets/sidebar-icons-active/orders.svg",
    earning:"assets/sidebar-icons-active/earning.svg",
    sport:"assets/sidebar-icons-active/sport.svg",
    logout:"assets/sidebar-icons-active/logout.svg",
  };

  // Role management - can be changed based on authentication
  userRole: string = 'club_manager'; // club_manager or admin
  // userRole: string = 'admin'; // club_manager or admin
  
  // Menu items for admin role
  adminMenuItems: MenuItem[] = [
    { icon: this.icons['dashboard'], label: 'Dashboard', route: '' },
    { icon: this.icons['trainer'], label: 'Trainer Management', route: '' },
    { icon: this.icons['user'], label: 'Our Players', route: '' },
    { icon: this.icons['clubs'], label: 'Our Clubs', route: '' },
    { icon: this.icons['orders'], label: 'Orders', route: '' },
    { icon: this.icons['sport'], label: 'Sports', route: '' },
    { icon: this.icons['request'], label: 'Pricing List', route: '' },
    { icon: this.icons['earning'], label: 'My earnings', route: '' },
    { icon: this.icons['logout'], label: 'Sign out', route: '' }

  ];

  // Menu items for club manager role
  clubManagerMenuItems: MenuItem[] = [
    { icon: this.icons['dashboard'], label: 'Dashboard', route: '' },
    { icon: this.icons['trainer'], label: 'Trainers', route: '' },
    { icon: this.icons['session'], label: 'My session', route: '' },
    { icon: this.icons['request'], label: 'Request', route: '' },
    { icon: this.icons['orders'], label: 'Orders', route: '' },
    { icon: this.icons['earning'], label: 'My earnings', route: '' },
    { icon: this.icons['sport'], label: 'Sports', route: '' },
    { icon: this.icons['logout'], label: 'Sign out', route: '' }
  ];

  currentMenuItems: MenuItem[] = [];

  getIconKey(iconPath: string): string {
    const name = iconPath.split('/').pop()?.replace('.svg', '');
    return name ?? '';
  }

  ngOnInit() {
    this.loadMenuItems();
  }

  loadMenuItems() {
    // Lazy loading based on role
    if (this.userRole === 'admin') {
      this.currentMenuItems = this.adminMenuItems.map((item, index) => ({
        ...item,
        active: index === 0 
      }));
    } else if (this.userRole === 'club_manager') {
      this.currentMenuItems = this.clubManagerMenuItems.map((item, index) => ({
        ...item,
        active: index === 0
      }));
  }
}

  onMenuItemClick(item: MenuItem) {
    // Reset all active states
    this.currentMenuItems.forEach(menuItem => menuItem.active = false);
    // Set clicked item as active
    item.active = true;
  }
}
