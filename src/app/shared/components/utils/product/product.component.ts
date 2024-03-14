import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { SharedInfoService } from 'src/app/services/shared-info.service';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Products[] = [];
  constructor(private productService: ProductService, private sharedInfoService: SharedInfoService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().pipe(
      catchError(error => {
        return throwError(() => error);
      })
    ).subscribe(data => {
      console.log(data)
      this.products = data.slice(0, 10);
    })
  }

  addProductToCart(product: Products) {
    this.sharedInfoService.addProduct(product);
  }

}
