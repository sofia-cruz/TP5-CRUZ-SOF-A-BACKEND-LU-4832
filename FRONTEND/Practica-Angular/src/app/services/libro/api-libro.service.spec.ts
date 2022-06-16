import { TestBed } from '@angular/core/testing';

import { ApiLibroService } from './api-libro.service';

describe('ApiLibroService', () => {
  let service: ApiLibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
