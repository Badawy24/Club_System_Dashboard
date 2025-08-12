import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})

export class VerificationComponent {

  codeForm: FormGroup;
  countdown: number = 30;
  interval: any;
  userEmail: any = localStorage.getItem('user_temp_email');
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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

    this.route.queryParams.subscribe(params => {
      if (params['showSuccess']) {
        this.toastr.success("Please check your email");
      }
    });
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
    if (this.codeForm.valid) {
      this.loading = true;
      const otpCode = this.fullCode;

      const encryptedId = localStorage.getItem('user_temp_id');
      if (!encryptedId) {
        this.toastr.error("User ID not found. Please register again.");
        return;
      }

      const userId = parseInt(atob(encryptedId), 10);

      const payload = {
        user_id: userId,
        otp_code: otpCode
      };

      this.authService.verifyOtp(payload).subscribe({
        next: (res: any) => {
          this.loading = false;
          if (res.success) {
            this.toastr.success(res.message || 'Account verified successfully');
            localStorage.removeItem('user_temp_id');
            this.router.navigate(['/auth/login'], {
              queryParams: { showSuccess: true }
            });
          } else {
            this.toastr.error('OTP verification failed');
          }
        },
        error: (err: any) => {
          this.loading = false;
          this.toastr.error('OTP verification Incorrect');
        }
      });

    } else {
      this.codeForm.markAllAsTouched();
    }
  }

  resendCode(event: Event) {
    event.preventDefault();
    const email = localStorage.getItem('user_temp_email');

    if (!email) {
      this.toastr.error("Email not found. Please register again.");
      return;
    }

    this.authService.sendOtp({ channel: 'email', email }).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.toastr.success(res.message || 'OTP resent successfully');
          this.countdown = 59;
          clearInterval(this.interval);
          this.startCountdown();
        } else {
          this.toastr.error(res.message || 'Failed to resend OTP');
        }
      },
      error: (err: any) => {
        this.toastr.error(err.error?.message || 'Something went wrong');
      }
    });
  }


}

