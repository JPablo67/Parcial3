import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { promoGuard } from './promo.guard';

describe('promoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => promoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
