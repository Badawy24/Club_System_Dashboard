import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get emailControl() {
    return this.loginForm.get('email')! as FormControl;
  }

  get passwordControl() {
    return this.loginForm.get('password')! as FormControl;
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;

      const payload = {
        login: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      this.authService.login(payload).subscribe({
        next: (res: any) => {
          this.loading = false;

          if (res.success) {
            localStorage.setItem('token', res.data.token);

            const encryptedType = btoa(res.data.user.type);
            localStorage.setItem('user_type', encryptedType);

            const encryptedId = btoa(res.data.user.id.toString());
            localStorage.setItem('user_temp_id', encryptedId);

            this.toastr.success(res.message || 'Login successful');

            this.router.navigate(['/dashboard']);
          } else {
            this.toastr.error(res.message || 'Login failed');
          }
        },
        error: (err) => {
          this.loading = false;
          this.toastr.error(err.error?.message || 'Login failed');
        }
      });
    }
  }

  onSubmit() {
    this.login();
  }
}

