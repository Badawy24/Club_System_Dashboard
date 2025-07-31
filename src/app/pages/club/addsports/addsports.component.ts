import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addsports',
  standalone: true,
  imports: [],
  templateUrl: './addsports.component.html',
  styleUrl: './addsports.component.css'
})
export class AddsportsComponent {
 @Output() close = new EventEmitter<void>();
 
   closeModal() {
     this.close.emit();
   }
}
