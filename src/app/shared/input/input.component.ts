// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-input',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './input.component.html',
//   styleUrl: './input.component.css',
// })
// export class InputComponent {
//   @Input() type: string = 'text';
//   @Input() label?: string;
//   @Input() placeholder: string = '';
//   @Input() icon: string = 'bi bi-person';
//   @Input() control!: FormControl<any>;
// }


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
}
