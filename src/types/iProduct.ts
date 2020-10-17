export interface IProduct {
  id: string;
  name: string;
  shortDescription: string;
  brand: string;
  image: {
    url: string;
    alt: string;
    title: string;
  };
  unitPrice: string;
  priceRange: boolean;
  minPrice: number;
  maxPrice: number;
  currencyCode: string;
  currencySymbol: string;
  variantOptions: [];
}
