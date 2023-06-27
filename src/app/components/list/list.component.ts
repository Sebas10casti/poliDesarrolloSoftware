import { Component } from '@angular/core';
import {ProductsServiceTsService} from '../../services/products.service.ts.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  items: any = [];
  itemsFilters: any = [];
  searchValue: any = [];
  showFilter: boolean =  false;
  minPrice: number = 10000;
  maxPrice: number = 9999999;
  selectCategory: string = '';
  searchGlobal: string = '';
  counter: number = 0;
  itemDetail: any[] = [];
  showDetailItem: boolean = false;
  showCart: boolean = false;
  constructor(private productsServiceTsService:ProductsServiceTsService,  private router: Router){}

  ngOnInit(): void {
    this.productsServiceTsService.listproducts().subscribe({next: (data: any) => {this.items = data; this.itemsFilters = data}})
    this.productsServiceTsService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }


  fnSearchGlobal(){
    this.itemsFilters = [...this.items].filter(item=> {
      return item.name.toLowerCase().includes(this.searchGlobal.toLowerCase()) || item.category.toLowerCase().includes(this.searchGlobal.toLowerCase())
    })
  }

  advancedFilters(type: string){
    this.itemsFilters = [...this.items].filter(item=> {
      return item.category.toLowerCase().includes(this.selectCategory.toLowerCase()) && item.price >= this.minPrice && item.price <= this.maxPrice;
    })
  }

  clearFilters(){
    this.minPrice = 10000;
    this.maxPrice = 9999999;
    this.selectCategory = '';
    this.itemsFilters = [...this.items]
  }

  addItemCar(item: any){
    this.productsServiceTsService.addProduct(item);
  }

  openProduct(item: any){
    this.itemDetail = item;
    this.showDetailItem = true;
  }

  closeDetail(){
    this.showDetailItem = false;
  }

  toogleCart(state: boolean){
    this.showCart = state;
  }
}
