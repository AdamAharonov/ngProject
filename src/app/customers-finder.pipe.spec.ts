import { CustomersFinderPipe } from './pipes/customers-finder.pipe';

describe('CustomersFinderPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomersFinderPipe();
    expect(pipe).toBeTruthy();
  });
});
