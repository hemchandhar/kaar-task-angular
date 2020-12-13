import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerNavComponent } from './career-nav.component';

describe('CareerNavComponent', () => {
  let component: CareerNavComponent;
  let fixture: ComponentFixture<CareerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
