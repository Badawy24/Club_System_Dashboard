import { Component } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    SearchBoxComponent,
    UserProfileComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
