import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { generateManyItems } from '../mocks/products-mock';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceTsService {

  constructor() { }

  listproducts(){
    return of(generateManyItems());
  }

}
