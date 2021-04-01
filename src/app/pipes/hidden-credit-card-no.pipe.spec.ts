import { HiddenCreditCardNoPipe } from './hidden-credit-card-no.pipe';

describe('HiddenCreditCardPipe', () => {
  it('create an instance', () => {
    const pipe = new HiddenCreditCardNoPipe();
    expect(pipe).toBeTruthy();
  });
});
