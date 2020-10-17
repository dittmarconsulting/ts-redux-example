const getPriceString = (currencySymbol, value) => {
  return `${currencySymbol} ${value.toFixed(2)}`;
};

export const getPrice = (
  { priceRange = false, currencySymbol, minPrice, maxPrice, unitPrice },
  variantPrice,
) => {
  const slicedCurrencySymbol = currencySymbol
    ? currencySymbol.split('')[1]
    : '$';
  return priceRange && !variantPrice
    ? `${getPriceString(slicedCurrencySymbol, minPrice)} - ${getPriceString(
        currencySymbol,
        maxPrice,
      )}`
    : `${getPriceString(
        slicedCurrencySymbol,
        variantPrice ? variantPrice : unitPrice,
      )}`;
};
