import { Component } from '@angular/core';
import {ProductsServiceTsService} from '../../services/products.service.ts.service';

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

  constructor(private productsServiceTsService:ProductsServiceTsService ){}

  ngOnInit(): void {
    this.productsServiceTsService.listproducts().subscribe({next: (data) => {this.items = data; this.itemsFilters = data}})
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
}
