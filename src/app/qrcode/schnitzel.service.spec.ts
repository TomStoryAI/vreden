import { TestBed } from '@angular/core/testing';

import { SchnitzelService } from './schnitzel.service';

describe('SchnitzelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchnitzelService = TestBed.get(SchnitzelService);
    expect(service).toBeTruthy();
  });
});
