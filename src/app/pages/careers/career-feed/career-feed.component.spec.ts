import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerFeedComponent } from './career-feed.component';

describe('CareerFeedComponent', () => {
  let component: CareerFeedComponent;
  let fixture: ComponentFixture<CareerFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
