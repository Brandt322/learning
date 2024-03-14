import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRequest, Products } from '../shared/models/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.productUrlPlatiz;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url);
  }

  addProduct(product: ProductRequest): Observable<object> {
    return this.http.post(this.url, product);
  }
}
