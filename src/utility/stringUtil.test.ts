import { getPrice } from './stringUtil';

describe('Test the getPrice utility function', () => {
  const mockProductWithSinglePrice = {
    currencyCode: 'AUD',
    currencySymbol: 'A$',
    priceRange: false,
    unitPrice: 103,
  };

  const mockProductWithPriceRange = {
    currencyCode: 'AUD',
    currencySymbol: 'A$',
    priceRange: true,
    maxPrice: 61,
    minPrice: 30,
  };

  it('should display a single price', () => {
    const priceString = getPrice(mockProductWithSinglePrice);
    const expectedString = '$ 103.00';
    expect(priceString).toEqual(expectedString);
  });

  it('should display a single range', () => {
    const priceString = getPrice(mockProductWithPriceRange);
    const expectedString = '$ 30.00 - A$ 61.00';
    expect(priceString).toEqual(expectedString);
  });

  it('should display the variant price instead', () => {
    const variantPrice = 100;
    const priceString = getPrice(mockProductWithPriceRange, variantPrice);
    const expectedString = '$ 100.00';
    expect(priceString).toEqual(expectedString);
  });
});
