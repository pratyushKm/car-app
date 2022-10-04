import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCheckupComponent } from './reg-checkup.component';

describe('RegCheckupComponent', () => {
  let component: RegCheckupComponent;
  let fixture: ComponentFixture<RegCheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegCheckupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
