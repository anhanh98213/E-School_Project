import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMajorComponent } from './all-major.component';

describe('AllMajorComponent', () => {
  let component: AllMajorComponent;
  let fixture: ComponentFixture<AllMajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMajorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
