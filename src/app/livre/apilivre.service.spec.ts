import { TestBed } from '@angular/core/testing';

import { ApilivreService } from './apilivre.service';

describe('ApilivreService', () => {
  let service: ApilivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApilivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
