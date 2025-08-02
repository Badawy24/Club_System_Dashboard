import { Component } from '@angular/core';
import { AddsportsComponent } from '../../pages/club/addsports/addsports.component';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from '../../pages/club/order-list/order-list.component';
import { SharedModule } from '../../shared/shared/shared.module';
@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [AddsportsComponent , CommonModule , OrderListComponent , SharedModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
