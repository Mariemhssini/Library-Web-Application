import { TestBed } from '@angular/core/testing';

import { ApifournisseurService } from './apifournisseur.service';

describe('ApifournisseurService', () => {
  let service: ApifournisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifournisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
