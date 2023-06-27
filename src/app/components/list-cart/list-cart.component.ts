import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsServiceTsService } from 'src/app/services/products.service.ts.service';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.scss']
})
export class ListCartComponent {
  @Output() closeCart = new EventEmitter();

  list:  any = [];
  price = 0;

  constructor(private productsServiceTsService:ProductsServiceTsService){}

  ngOnInit(): void {
    this.productsServiceTsService.myCart$.subscribe(products => {
      this.list = products;
      this.price = 0;
      for (let i = 0; i < products.length; i++) {
        this.price += products[i].price;
      }
    });
  }

  removeProduct(item: any){
    this.productsServiceTsService.removeProduct(item)
  }

  closeCartFN() {
    this.closeCart.emit();
  }
}
