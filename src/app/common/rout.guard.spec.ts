import { TestBed } from '@angular/core/testing';

import { RoutGuard } from './rout.guard';

describe('RoutGuard', () => {
  let guard: RoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
