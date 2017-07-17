import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductNameFilterPipe } from '../product-name-filter.pipe';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  errorMessage: string;
  filteredProducts: Product[];
  imageMargin = 50;
  imageWidth = 50;
  messages: string[];
  noProductsFound: boolean;
  pageTitle = 'Products List';
  products: Product[];
  productFilter: string = null;
  productNameFilterPipe = new ProductNameFilterPipe();
  prodServiceSubscription: Subscription;
  showImage = false;

  constructor(private _ps: ProductService) { }
  
  ngOnInit() {
    this.prodServiceSubscription = this._ps.getProducts().subscribe(
      (products: Product[]) =>  this.filteredProducts = this.products = products);
  }

  ngOnDestroy() {
    this.prodServiceSubscription.unsubscribe();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onFilterValueChanged(filter) {
    this.productFilter = filter;
    this.filteredProducts = this.productNameFilterPipe.transform(this.products, this.productFilter);
    this.noProductsFound = this.filteredProducts.length < 1;
  }

  onRatingClicked(data) {
    console.log(data);
  }
}
