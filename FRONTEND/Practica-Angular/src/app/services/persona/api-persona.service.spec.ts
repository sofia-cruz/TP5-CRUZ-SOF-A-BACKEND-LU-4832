import { TestBed } from '@angular/core/testing';

import { ApiPersonaService } from './api-persona.service';

describe('ApiPersonaService', () => {
  let service: ApiPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
