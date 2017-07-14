import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productNameFilter'
})
export class ProductNameFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
