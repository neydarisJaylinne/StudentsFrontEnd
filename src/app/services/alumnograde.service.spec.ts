import { TestBed } from '@angular/core/testing';

import { AlumnogradeService } from './alumnograde.service';

describe('AlumnogradeService', () => {
  let service: AlumnogradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnogradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
