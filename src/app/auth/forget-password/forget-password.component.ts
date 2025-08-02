
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private route: Router) {
    this.forgetPass = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get emailControl() {
    return this.forgetPass.get('email')! as FormControl;
  }

  forget() {
    if (this.forgetPass.valid) {
      console.log(this.forgetPass.value);
    }
  }

  onSubmit() {
    console.log('Form Values:', this.forgetPass.value);
  }
}



