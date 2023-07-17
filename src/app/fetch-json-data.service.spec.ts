import { TestBed } from '@angular/core/testing';

import { FetchJsonDataService } from './fetch-json-data.service';

describe('FetchJsonDataService', () => {
  let service: FetchJsonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchJsonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
