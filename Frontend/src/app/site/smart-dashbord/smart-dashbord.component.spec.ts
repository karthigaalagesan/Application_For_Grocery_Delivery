import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartDashbordComponent } from './smart-dashbord.component';

describe('SmartDashbordComponent', () => {
  let component: SmartDashbordComponent;
  let fixture: ComponentFixture<SmartDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartDashbordComponent]
    });
    fixture = TestBed.createComponent(SmartDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
