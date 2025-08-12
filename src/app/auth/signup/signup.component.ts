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
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

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
  loading = false;


  daysOfWeek = [
    { label: 'Sat', value: 'Saturday' },
    { label: 'Sun', value: 'Sunday' },
    { label: 'Mon', value: 'Monday' },
    { label: 'Tue', value: 'Tuesday' },
    { label: 'Wed', value: 'Wednesday' },
    { label: 'Thu', value: 'Thursday' },
    { label: 'Fri', value: 'Friday' }
  ];

  hours = Array.from({ length: 12 }, (_, i) => i + 1);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
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

  private convertTo24Hour(hour: number, ampm: string): string {
    if (ampm === 'PM' && hour !== 12) {
      hour += 12;
    }
    if (ampm === 'AM' && hour === 12) {
      hour = 0;
    }
    return `${hour.toString().padStart(2, '0')}:00`;
  }


  // --- Form Submission ---
  onSubmit() {
    this.signup();
  }

  signup() {
    if (this.signupForm.valid && this.selectedDays.length > 0) {
      this.loading = true;
      const startHour24 = this.convertTo24Hour(
        +this.signupForm.value.startTimeHour,
        this.startTimeAmPm
      );

      const endHour24 = this.convertTo24Hour(
        +this.signupForm.value.endTimeHour,
        this.endTimeAmPm
      );

      const sportsArray = this.signupForm.value.sports
        .split(',')
        .map((sport: string) => sport.trim())
        .filter((sport: string) => sport.length > 0);

      const payload = {
        club_name: [this.signupForm.value.clubName],
        email: this.signupForm.value.email,
        sports: sportsArray,
        club_type: this.clubTypeArray.value.length === 1 ? this.clubTypeArray.value[0] : 'mixed',
        club_address: [this.signupForm.value.clubAddress],
        days_of_weeks: this.selectedDays,
        start_time: startHour24,
        end_time: endHour24,
        password: this.signupForm.value.password,
        type: 'club',
      };

      this.authService.register(payload).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.success) {
            const encryptedId = btoa(res.data.user.id.toString());
            localStorage.setItem('user_temp_id', encryptedId);
            localStorage.setItem('user_temp_email', res.data.user.email);
            this.router.navigate(['/auth/verify-otp'], {
              queryParams: { showSuccess: true }
            });
          }
        },
        error: (err) => {
          this.loading = false;
          this.toastr.error(err.error?.message || 'Registration failed');
        }
      });
    } else {
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
