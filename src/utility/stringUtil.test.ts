import { getPrice, IProductPriceProp } from './stringUtil';

describe('Test the getPrice utility function', () => {
  const mockProductWithSinglePrice: IProductPriceProp = {
    currencySymbol: 'A$',
    priceRange: false,
    maxPrice: 0,
    minPrice: 0,
    unitPrice: 103,
  };

  const mockProductWithPriceRange: IProductPriceProp = {
    priceRange: true,
    currencySymbol: 'A$',
    maxPrice: 61,
    minPrice: 30,
    unitPrice: 0,
  };

  it('should display a single price', () => {
    const priceString = getPrice(mockProductWithSinglePrice, undefined);
    const expectedString = '$ 103.00';
    expect(priceString).toEqual(expectedString);
  });

  it('should display a single range', () => {
    const priceString = getPrice(mockProductWithPriceRange, undefined);
    const expectedString = '$ 30.00 - $ 61.00';
    expect(priceString).toEqual(expectedString);
  });

  it('should display the variant price instead', () => {
    const variantPrice = 100;
    const priceString = getPrice(mockProductWithPriceRange, variantPrice);
    const expectedString = '$ 100.00';
    expect(priceString).toEqual(expectedString);
  });
});
