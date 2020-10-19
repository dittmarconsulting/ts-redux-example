const getPriceString = (currencySymbol: string, value: number) => {
  return `${currencySymbol} ${value.toFixed(2)}`;
};

export interface IProductPriceProp {
  priceRange: boolean;
  currencySymbol: string;
  minPrice: number;
  maxPrice: number;
  unitPrice: number;
}

export const getPrice = (
  {
    priceRange = false,
    currencySymbol,
    minPrice,
    maxPrice,
    unitPrice,
  }: IProductPriceProp,
  variantPrice: number | undefined,
) => {
  const slicedCurrencySymbol = currencySymbol
    ? currencySymbol.split('')[1]
    : '$';
  return priceRange && !variantPrice
    ? `${getPriceString(slicedCurrencySymbol, minPrice)} - ${getPriceString(
        slicedCurrencySymbol,
        maxPrice,
      )}`
    : `${getPriceString(
        slicedCurrencySymbol,
        variantPrice ? variantPrice : unitPrice,
      )}`;
};
