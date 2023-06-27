import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() item: any;
  @Output() addProduct = new EventEmitter();
  @Output() openProduct = new EventEmitter();

  addProductFN() {
    this.addProduct.emit(this.item);
  }

  openProductFN(){
    this.openProduct.emit(this.item);
  }
}
