import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddtrainerComponent } from '../addtrainer/addtrainer.component';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [CommonModule , AddtrainerComponent],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.css'
})
export class TrainerComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}

