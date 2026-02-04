import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PatientDashboardService } from './patient-dashboard.service';

describe('PatientDashboardService', () => {
  let service: PatientDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PatientDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
