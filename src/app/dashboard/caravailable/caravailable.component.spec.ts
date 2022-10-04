import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravailableComponent } from './caravailable.component';

describe('CaravailableComponent', () => {
  let component: CaravailableComponent;
  let fixture: ComponentFixture<CaravailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaravailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaravailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
