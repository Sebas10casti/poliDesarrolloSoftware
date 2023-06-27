import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent {
  @Input() product: any = '';

  @Output() closeDetail = new EventEmitter();
  @Output() addProduct = new EventEmitter();

  closeDetailFN() {
    this.closeDetail.emit();
  }

  addProductFN(){
    this.addProduct.emit(this.product)
  }

}
