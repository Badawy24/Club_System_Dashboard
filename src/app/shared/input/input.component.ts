
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() control!: FormControl;
  @Input() errorMessages: { [key: string]: string } = {};

  showPassword: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  get inputType(): string {
    if (this.type === 'password') {
      return this.showPassword ? 'text' : 'password';
    }
    return this.type;
  }

  get showError(): boolean {
    return this.control?.invalid && (this.control?.dirty || this.control?.touched);
  }

  getErrorMessage(): string {
    if (!this.control?.errors) return '';

    for (let errorKey in this.control.errors) {
      if (this.errorMessages[errorKey]) {
        return this.errorMessages[errorKey];
      }

      // fallback default messages
      switch (errorKey) {
        case 'required':
          return 'This field is required';
        case 'email':
          return 'Invalid email address';
        case 'minlength':
          const requiredLength = this.control.errors['minlength'].requiredLength;
          return `Minimum length is ${requiredLength} characters`;
        default:
          return 'Invalid field';
      }
    }

    return '';
  }
}





