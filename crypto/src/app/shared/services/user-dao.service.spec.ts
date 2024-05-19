import { TestBed } from '@angular/core/testing';

import { UserDAOService } from './user-dao.service';

describe('UserDAOService', () => {
  let service: UserDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
