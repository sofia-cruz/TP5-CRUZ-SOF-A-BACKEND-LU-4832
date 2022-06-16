import { TestBed } from '@angular/core/testing';

import { ApiTransaccionService } from './api-transaccion.service';

describe('ApiTransaccionService', () => {
  let service: ApiTransaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTransaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
