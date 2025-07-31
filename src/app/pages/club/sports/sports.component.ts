import { Component } from '@angular/core';
import { AddtrainerComponent } from '../addtrainer/addtrainer.component';
import { CommonModule } from '@angular/common';
import { AddsportsComponent } from '../addsports/addsports.component';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [AddsportsComponent , CommonModule],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {
 showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
