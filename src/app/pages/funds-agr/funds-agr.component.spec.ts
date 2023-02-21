import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsAgrComponent } from './funds-agr.component';

describe('FundsAgrComponent', () => {
  let component: FundsAgrComponent;
  let fixture: ComponentFixture<FundsAgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundsAgrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundsAgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
