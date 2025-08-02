import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmChangePasswordComponent } from './confirm-change-password.component';

describe('ConfirmChangePasswordComponent', () => {
  let component: ConfirmChangePasswordComponent;
  let fixture: ComponentFixture<ConfirmChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmChangePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
