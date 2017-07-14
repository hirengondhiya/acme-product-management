import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule, productRoutingComponents } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductService } from './product.service';
import { ProductNameFilterPipe } from './product-name-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductNameFilterPipe,
    productRoutingComponents    
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
