import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { minSelectedCheckboxes } from '../../validators/min-selected-checkboxes.validator';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm: FormGroup;
  selectedDays: string[] = [];
  allDaysSelected: boolean = false;
  startTimeAmPm: string = 'AM';
  endTimeAmPm: string = 'AM';

  daysOfWeek = [
    { label: 'Sat', value: 'saturday' },
    { label: 'Sun', value: 'sunday' },
    { label: 'Mon', value: 'monday' },
    { label: 'Tue', value: 'tuesday' },
    { label: 'Wed', value: 'wednesday' },
    { label: 'Thu', value: 'thursday' },
    { label: 'Fri', value: 'friday' }
  ];

  hours = Array.from({ length: 12 }, (_, i) => i + 1);

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      clubName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      sports: ['', [Validators.required]],
      clubType: this.fb.array([], [minSelectedCheckboxes(1)]),
      clubAddress: ['', [Validators.required]],
      startTimeHour: ['', [Validators.required]],
      endTimeHour: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // --- Getters ---
  get clubNameControl() {
    return this.signupForm.get('clubName')! as FormControl;
  }

  get emailControl() {
    return this.signupForm.get('email')! as FormControl;
  }

  get sportsControl() {
    return this.signupForm.get('sports')! as FormControl;
  }

  get clubAddressControl() {
    return this.signupForm.get('clubAddress')! as FormControl;
  }

  get passwordControl() {
    return this.signupForm.get('password')! as FormControl;
  }

  get clubTypeArray() {
    return this.signupForm.get('clubType') as FormArray;
  }

  // --- Club Type Checkbox Handling ---
  onCheckboxChange(e: any) {
    const clubTypeArray = this.clubTypeArray;
    if (e.target.checked) {
      clubTypeArray.push(new FormControl(e.target.value));
    } else {
      const index = clubTypeArray.controls.findIndex(x => x.value === e.target.value);
      if (index !== -1) {
        clubTypeArray.removeAt(index);
      }
    }
  }
  onItemClick(event: MouseEvent, value: string) {
    const clubTypeArray = this.clubTypeArray;
    const index = clubTypeArray.controls.findIndex(x => x.value === value);

    if (index > -1) {
      clubTypeArray.removeAt(index);
    } else {
      clubTypeArray.push(new FormControl(value));
    }
  }

  isChecked(value: string): boolean {
    return this.clubTypeArray.value.includes(value);
  }


  // --- Days of Week Selection ---
  toggleDay(day: string) {
    const index = this.selectedDays.indexOf(day);
    if (index > -1) {
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(day);
    }
    this.checkAllDaysSelected();
  }

  toggleAllDays() {
    if (this.allDaysSelected) {
      this.selectedDays = [];
      this.allDaysSelected = false;
    } else {
      this.selectedDays = this.daysOfWeek.map(day => day.value);
      this.allDaysSelected = true;
    }
  }

  checkAllDaysSelected() {
    this.allDaysSelected = this.selectedDays.length === this.daysOfWeek.length;
  }

  // --- Time AM/PM Handling ---
  setStartTimeAmPm(period: string) {
    this.startTimeAmPm = period;
  }

  setEndTimeAmPm(period: string) {
    this.endTimeAmPm = period;
  }

  // --- Form Submission ---
  onSubmit() {
    this.signup();
  }

  signup() {
    if (this.signupForm.valid && this.selectedDays.length > 0) {
      const formData = {
        ...this.signupForm.value,
        clubType: this.clubTypeArray.value,
        selectedDays: this.selectedDays,
        startTimeAmPm: this.startTimeAmPm,
        endTimeAmPm: this.endTimeAmPm
      };
      console.log('Signup Data:', formData);
    } else {
      console.log('Form is invalid or no days selected');
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.signupForm.controls).forEach(key => {
      const control = this.signupForm.get(key);
      control?.markAsTouched();
      if (control instanceof FormArray) {
        control.controls.forEach(ctrl => ctrl.markAsTouched());
      }
    });
  }
}
