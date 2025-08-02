import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm-change-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './confirm-change-password.component.html',
  styleUrl: './confirm-change-password.component.css'
})
export class ConfirmChangePasswordComponent {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordsMatchValidator });
  }

  get oldPasswordControl() {
    return this.changePasswordForm.get('oldPassword') as FormControl;
  }

  get newPasswordControl() {
    return this.changePasswordForm.get('newPassword') as FormControl;
  }

  get confirmPasswordControl() {
    return this.changePasswordForm.get('confirmPassword') as FormControl;
  }

  get passwordsMismatch(): boolean {
    return this.changePasswordForm.hasError('passwordsMismatch') &&
      this.confirmPasswordControl.touched;
  }

  passwordsMatchValidator(group: FormGroup) {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordsMismatch: true };
  }

  changePassword() {
    if (this.changePasswordForm.valid) {
      console.log('Changing password:', this.changePasswordForm.value);
    }
  }
}





// @Component({
//   selector: 'app-change-password',
//   standalone: true,
//   imports: [
//
//   ],
//   templateUrl: './change-password.component.html',
//   styleUrl: './change-password.component.css'
// })
// export class ConfirmChangePasswordComponent {
//   ConfirmChangePass: FormGroup;

//   constructor(private fb: FormBuilder, private route: Router) {
//     this.ConfirmChangePass = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//     });
//   }

//   get emailControl() {
//     return this.ConfirmChangePass.get('email')! as FormControl;
//   }

//   change() {
//     if (this.ConfirmChangePass.valid) {
//       console.log(this.ConfirmChangePass.value);
//     }
//   }

//   onSubmit() {
//     console.log('Form Values:', this.ConfirmChangePass.value);
//   }
// }




// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
// import { InputComponent } from '../../shared/input/input.component';
// import { ButtonComponent } from '../../shared/button/button.component';
// import { Router, RouterLink } from '@angular/router';
// @Component({
//   selector: 'app-reset-password',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     InputComponent,
//     ButtonComponent,
//   ],
//   templateUrl: './reset-password.component.html',
//   styleUrl: './reset-password.component.css'
// })
// export class ResetPasswordComponent {
//   ConfirmConfirmChangePass: FormGroup;

//   constructor(private fb: FormBuilder, private route: Router) {
//     this.ConfirmConfirmChangePass = this.fb.group({
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', [Validators.required]],
//     }, { validators: this.passwordsMatchValidator });
//   }

//   get passwordControl() {
//     return this.ConfirmConfirmChangePass.get('password')! as FormControl;
//   }

//   get confirmPasswordControl() {
//     return this.ConfirmConfirmChangePass.get('confirmPassword') as FormControl;
//   }

//   resetPass() {
//     if (this.ConfirmConfirmChangePass.valid) {
//       console.log(this.ConfirmConfirmChangePass.value);
//     } else {
//       console.warn('Form not valid');
//     }
//   }

//   passwordsMatchValidator(group: FormGroup) {
//     const password = group.get('password')?.value;
//     const confirmPassword = group.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { passwordsMismatch: true };
//   }

//   get passwordsMismatch(): boolean {
//     return this.ConfirmConfirmChangePass.hasError('passwordsMismatch') &&
//       this.confirmPasswordControl.touched;
//   }

//   onSubmit() {
//     console.log('Form Values:', this.ConfirmConfirmChangePass.value);
//   }
// }
