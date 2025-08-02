import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router, RouterLink } from '@angular/router';
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

  constructor(private fb: FormBuilder, private route: Router) {
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

  resetPass() {
    if (this.resetForm.valid) {
      console.log(this.resetForm.value);
    } else {
      console.warn('Form not valid');
    }
  }

  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  get passwordsMismatch(): boolean {
    return this.resetForm.hasError('passwordsMismatch') &&
      this.confirmPasswordControl.touched;
  }

  onSubmit() {
    console.log('Form Values:', this.resetForm.value);
  }
}
