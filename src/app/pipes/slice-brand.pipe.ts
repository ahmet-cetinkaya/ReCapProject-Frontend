import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'sliceBrand',
})
export class SliceBrandPipe implements PipeTransform {
  transform(value: Brand[], length: number): Brand[] {
    return value.slice(0, length);
  }
}
