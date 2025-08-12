import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  resetForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordsMatchValidator });
  }

  get passwordControl() {
    return this.resetForm.get('password')! as FormControl;
  }

  get confirmPasswordControl() {
    return this.resetForm.get('confirmPassword') as FormControl;
  }

  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  get passwordsMismatch(): boolean {
    return this.resetForm.hasError('passwordsMismatch') && this.confirmPasswordControl.touched;
  }

  resetPass() {
    if (this.resetForm.valid) {
      this.loading = true;
      const resetToken = localStorage.getItem('reset_token');

      if (!resetToken) {
        this.toastr.error('Reset token not found, please restart the process');
        this.router.navigate(['/auth/forget-password']);
        return;
      }

      this.authService.resetPassword({
        reset_token: resetToken,
        password: this.passwordControl.value,
        password_confirmation: this.confirmPasswordControl.value,
      }).subscribe({
        next: (res: any) => {
          this.loading = false;
          if (res.success) {
            this.toastr.success('Password reset successfully');
            localStorage.removeItem('reset_token');
            localStorage.removeItem('user_temp_email');
            this.router.navigate(['/auth/login']);
          } else {
            this.toastr.error(res.message || 'Failed to reset password');
          }
        },
        error: (err) => {
          this.loading = false;
          this.toastr.error(err.error?.message || 'Failed to reset password');
        }
      });

    } else {
      this.resetForm.markAllAsTouched();
    }
  }

  onSubmit() {
    this.resetPass();
  }
}
