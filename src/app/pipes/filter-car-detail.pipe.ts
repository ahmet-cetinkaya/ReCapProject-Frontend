import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterCarDetail',
})
export class FilterCarDetailPipe implements PipeTransform {
  transform(value: CarDetail[], filterText: string): CarDetail[] {
    return value.filter((c: CarDetail) =>
      `${c.modelYear} ${c.brandName} ${c.carName}`
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  }
}
