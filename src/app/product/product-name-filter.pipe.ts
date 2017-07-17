import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productNameFilter'
})
export class ProductNameFilterPipe implements PipeTransform {

  transform(products: Product[], filterValue: string): Product[] {
    if (filterValue && products) {
      let filteredProducts = products.filter((p: Product) => p.productName.toLowerCase().includes(filterValue.toLowerCase()));
      return filteredProducts;
    } else {
      return products;
    }
  }
}
