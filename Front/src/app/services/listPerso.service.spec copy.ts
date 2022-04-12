import { TestBed } from '@angular/core/testing';

import { ListPersoService } from './listPerso.service';

describe('ListPersoService', () => {
  let service: ListPersoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPersoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
