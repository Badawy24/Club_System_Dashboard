import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressGaugeComponent } from '../progress-gauge/progress-gauge.component';

@NgModule({
  imports: [
    CommonModule,
    ProgressGaugeComponent,
  ],
  exports: [
    ProgressGaugeComponent,
  ]
})
export class SharedModule {}
