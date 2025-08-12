import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // isLogin = false;

  constructor(private router: Router) {}

  // ngOnInit(): void {
  //   if (this.isLogin) {
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     this.router.navigate(['/auth/login']);
  //   }
  // }
  title = 'dashboard-app';
}
