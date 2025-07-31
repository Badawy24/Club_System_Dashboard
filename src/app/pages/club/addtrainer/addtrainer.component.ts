import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addtrainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addtrainer.component.html',
  styleUrl: './addtrainer.component.css'
})
export class AddtrainerComponent {
@Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
