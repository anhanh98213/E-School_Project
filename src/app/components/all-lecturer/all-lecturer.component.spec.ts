import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLecturerComponent } from './all-lecturer.component';

describe('AllLecturerComponent', () => {
  let component: AllLecturerComponent;
  let fixture: ComponentFixture<AllLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLecturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
