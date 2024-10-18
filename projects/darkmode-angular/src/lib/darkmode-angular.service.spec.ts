import { TestBed } from '@angular/core/testing';

import { DarkmodeAngularService } from './darkmode-angular.service';

describe('DarkmodeAngularService', () => {
  let service: DarkmodeAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodeAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
