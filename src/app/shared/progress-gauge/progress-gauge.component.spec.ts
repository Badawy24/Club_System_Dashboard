import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressGaugeComponent } from './progress-gauge.component';

describe('ProgressGaugeComponent', () => {
  let component: ProgressGaugeComponent;
  let fixture: ComponentFixture<ProgressGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressGaugeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
