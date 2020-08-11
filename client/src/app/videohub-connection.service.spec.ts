import { TestBed } from '@angular/core/testing';

import { VideohubConnectionService } from './videohub-connection.service';

describe('VideohubConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideohubConnectionService = TestBed.get(VideohubConnectionService);
    expect(service).toBeTruthy();
  });
});
