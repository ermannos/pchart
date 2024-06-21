import { convert } from '../src/utils';

const pDate = new Date('2024-06-21T00:00:00.000+0200');
const bDate = new Date('1971-04-26T00:00:00.000+0100');

describe('utils', () => {
  it('should convert to weeks in the same way', () => {
    const weeks = convert(pDate, bDate, 'week');
    expect(2773.6 === weeks).toBeTruthy();
  });

  it('should convert to months in the same way', () => {
    const months = convert(pDate, bDate, 'month');
    expect(638.3 === months).toBeTruthy();
  });

})