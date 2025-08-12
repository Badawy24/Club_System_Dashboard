import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-otp-forget',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './otp-forget.component.html',
  styleUrl: './otp-forget.component.css'
})
export class OtpForgetComponent {

  codeForm: FormGroup;
  countdown: number = 60;
  interval: any;
  userEmail: string | null = localStorage.getItem('user_temp_email');
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {
    this.codeForm = this.fb.group({
      code1: ['', [Validators.required, Validators.maxLength(1)]],
      code2: ['', [Validators.required, Validators.maxLength(1)]],
      code3: ['', [Validators.required, Validators.maxLength(1)]],
      code4: ['', [Validators.required, Validators.maxLength(1)]],
    });

    this.startCountdown();

    if (!this.userEmail) {
      this.toastr.error('Email not found, please start again');
      this.router.navigate(['/auth/forget-password']);
    }
  }

  startCountdown() {
    this.interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  get isFormValid(): boolean {
    return this.codeForm.valid;
  }

  get fullCode(): string {
    const { code1, code2, code3, code4 } = this.codeForm.value;
    return `${code1}${code2}${code3}${code4}`;
  }

  onCodeInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    const nextInput = input.nextElementSibling as HTMLInputElement;
    if (input.value && nextInput && nextInput.tagName === 'INPUT') {
      nextInput.focus();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const prevInput = input.previousElementSibling as HTMLInputElement;

    if ((event.key === 'Backspace' || event.key === 'ArrowLeft') && !input.value && prevInput) {
      prevInput.focus();
      event.preventDefault();
    }

    if (event.key === 'ArrowRight') {
      const nextInput = input.nextElementSibling as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  }

  onSubmit() {
    if (this.codeForm.valid && this.userEmail) {
      this.loading = true;

      this.authService.verifyOtpPasswordReset({
        email: this.userEmail,
        otp_code: this.fullCode
      }).subscribe({
        next: (res: any) => {
          this.loading = false;
          if (res.success) {
            this.toastr.success('OTP verified successfully');
            localStorage.setItem('reset_token', res.data.reset_token);
            this.router.navigate(['/auth/reset-password']);
          } else {
            this.toastr.error('OTP verification failed');
          }
        },
        error: () => {
          this.loading = false;
          this.toastr.error('OTP verification incorrect');
        }
      });
    } else {
      this.codeForm.markAllAsTouched();
    }
  }

  resendCode(event: Event) {
    event.preventDefault();
    if (!this.userEmail) {
      this.toastr.error('Email not found, please start again');
      return;
    }
    this.authService.forgotPassword({ email: this.userEmail }).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.toastr.success('OTP resent successfully');
          this.countdown = 59;
          clearInterval(this.interval);
          this.startCountdown();
        } else {
          this.toastr.error('Failed to resend OTP');
        }
      },
      error: () => {
        this.toastr.error('Something went wrong');
      }
    });
  }
}
