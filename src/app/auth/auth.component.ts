import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
   isSignupPage: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.route.firstChild?.snapshot.routeConfig?.path;
        this.isSignupPage = currentRoute === 'signup';
      });
  }
}




