
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  forgetPass: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService) {

    this.forgetPass = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get emailControl() {
    return this.forgetPass.get('email')! as FormControl;
  }

  forget() {
    if (this.forgetPass.valid) {
      this.loading = true;
      this.authService.forgotPassword(this.forgetPass.value).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.success) {
            this.toastr.success('Please Check Your Email');
            localStorage.setItem('user_temp_email', this.emailControl.value);
            this.router.navigate(['/auth/forget-otp'], { queryParams: { email: this.emailControl.value } });
          } else {
            this.toastr.error('Failed to Send OTP');
          }
        },
        error: (err) => {
          this.loading = false;
          this.toastr.error('Failed to Send OTP');
        }
      });
    } else {
      this.forgetPass.markAllAsTouched();
    }
  }


  onSubmit() {
    this.forget();
  }
}
