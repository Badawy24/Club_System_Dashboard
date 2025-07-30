import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // ✅ "styleUrls" بدل "styleUrl"
})
export class LoginComponent {
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
