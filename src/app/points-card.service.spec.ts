import { TestBed } from '@angular/core/testing';

import { PointsCardService } from './points-card.service';

describe('PointsCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointsCardService = TestBed.get(PointsCardService);
    expect(service).toBeTruthy();
  });
});
