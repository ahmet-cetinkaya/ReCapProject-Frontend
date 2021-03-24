import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterCar',
})
export class FilterCarPipe implements PipeTransform {
  transform(value: Car[], filterText: string): Car[] {
    return value.filter((c: Car) =>
      c.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
