import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGuardianComponent } from './dashboard-guardian.component';

describe('DashboardGuardianComponent', () => {
  let component: DashboardGuardianComponent;
  let fixture: ComponentFixture<DashboardGuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGuardianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
