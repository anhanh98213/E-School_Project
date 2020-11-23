import { TestBed } from '@angular/core/testing';
import { ESchoolService } from './eSchool.service';

describe('ESchoolService', () => {
  let service: ESchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ESchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
