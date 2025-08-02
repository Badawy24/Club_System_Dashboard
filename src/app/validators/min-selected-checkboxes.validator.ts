import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Validator to ensure that at least `min` checkboxes are selected
 */
export function minSelectedCheckboxes(min: number = 1) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control && Array.isArray(control.value)) {
      const totalSelected = control.value.length;
      return totalSelected >= min ? null : { required: true };
    }

    return { required: true };
  };
}
