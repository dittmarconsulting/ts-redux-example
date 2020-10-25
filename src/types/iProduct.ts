import { IVariant } from './iVariant';

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
  unitPrice: number;
  priceRange: boolean;
  minPrice: number;
  maxPrice: number;
  currencyCode: string;
  currencySymbol: string;
  variantOptions: IVariant[];
}
