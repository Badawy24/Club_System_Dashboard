import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';

import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  countdown: number = 59;
  interval: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService) {
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
      console.log('Full code:', this.fullCode);
    } else {
      console.log('Form valid:', this.codeForm.valid);
      this.codeForm.markAllAsTouched();
    }
  }


  resendCode() {
    this.countdown = 59;
    this.startCountdown();
    console.log('Resend code triggered');
  }
}

