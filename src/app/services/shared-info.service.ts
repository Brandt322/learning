import { Injectable } from '@angular/core';
import { Products } from '../shared/models/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedInfoService {

  private productList: Products[] = [];
  private myCart = new BehaviorSubject<Products[]>([]);
  mycart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Products) {
    this.productList.push(product);
    this.myCart.next(this.productList);
    console.log(this.productList);
  }
}
