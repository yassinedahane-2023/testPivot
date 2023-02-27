import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFundsComponent } from './edit-funds.component';

describe('EditFundsComponent', () => {
  let component: EditFundsComponent;
  let fixture: ComponentFixture<EditFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
