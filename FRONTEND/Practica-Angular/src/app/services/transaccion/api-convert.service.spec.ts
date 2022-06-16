import { TestBed } from '@angular/core/testing';

import { ApiConvertService } from './api-convert.service';

describe('ApiConvertService', () => {
  let service: ApiConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
