import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrand',
})
export class FilterBrandPipe implements PipeTransform {
  transform(value: Brand[], filterText: string): Brand[] {
    return value.filter((b: Brand) =>
      b.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
