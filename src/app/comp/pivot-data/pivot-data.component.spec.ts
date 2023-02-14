import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PivotDataComponent } from './pivot-data.component';

describe('PivotDataComponent', () => {
  let component: PivotDataComponent;
  let fixture: ComponentFixture<PivotDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PivotDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PivotDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
