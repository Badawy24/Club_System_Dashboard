import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="type">
      <div class="spinner"></div>
      <span *ngIf="text">{{ text }}</span>
    </div>
  `,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() text: string = '';
  @Input() type: 'button' | 'fullscreen' | 'inline' = 'inline';
}
