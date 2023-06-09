import { TestBed } from '@angular/core/testing';

import { ProductsServiceTsService } from './products.service.ts.service';

describe('ProductsServiceTsService', () => {
  let service: ProductsServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
