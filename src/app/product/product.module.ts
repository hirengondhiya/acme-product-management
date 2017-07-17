import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ProductRoutingModule, productRoutingComponents } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductService } from './product.service';
import { ProductNameFilterPipe } from './product-name-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductNameFilterPipe,
    productRoutingComponents    
  ],
  providers: [
    ProductService
  ],
  exports: [
    HttpModule
  ]
})
export class ProductModule { }
