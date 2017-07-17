import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Product } from './product';

@Injectable()
export class ProductService {
  productsUrl = 'api/products';
  constructor(private _http: Http) { }

  getProducts(): Observable<Product[]> {
    return this._http
      .get(this.productsUrl)
      .map((res: Response) => <Product[]>res.json())
      .do((data) => console.log(data))
      .catch(this.handleError);
  }

  getProductById(id: number) : Observable<Product> {
    return this.getProducts()
      .map((products: Product[]) => products.find((product: Product) => product.productId === id));
  }

  handleError = (error) => {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error.');
  };
}
