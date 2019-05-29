import { TestBed } from '@angular/core/testing';

import { ClrChartsService } from './clr-charts.service';

describe('ClrChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClrChartsService = TestBed.get(ClrChartsService);
    expect(service).toBeTruthy();
  });
});
