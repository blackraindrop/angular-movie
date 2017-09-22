import { TestBed, inject } from '@angular/core/testing';

import { CatalogsService } from './catalogs.service';

describe('CatalogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogsService]
    });
  });

  it('should be created', inject([CatalogsService], (service: CatalogsService) => {
    expect(service).toBeTruthy();
  }));
});
