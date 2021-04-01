import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hiddenCreditCardNo',
})
export class HiddenCreditCardNoPipe implements PipeTransform {
  transform(creditCardNo: string): string {
    return creditCardNo.substring(creditCardNo.length - 3).padStart(16, '*');
  }
}
