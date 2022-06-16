import { TestBed } from '@angular/core/testing';

import { ApiPasajeService } from './api-pasaje.service';

describe('ApiPasajeService', () => {
  let service: ApiPasajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPasajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
