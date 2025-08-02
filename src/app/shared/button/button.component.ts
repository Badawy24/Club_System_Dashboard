import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = 'Submit';
  @Input() type: 'button' | 'submit' = 'submit';
  @Input() disabled: boolean = false;
}
