import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpForgetComponent } from './otp-forget.component';

describe('OtpForgetComponent', () => {
  let component: OtpForgetComponent;
  let fixture: ComponentFixture<OtpForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpForgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtpForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
