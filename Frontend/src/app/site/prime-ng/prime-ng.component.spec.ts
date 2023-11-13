import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgComponent } from './prime-ng.component';

describe('PrimeNgComponent', () => {
  let component: PrimeNgComponent;
  let fixture: ComponentFixture<PrimeNgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeNgComponent]
    });
    fixture = TestBed.createComponent(PrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
