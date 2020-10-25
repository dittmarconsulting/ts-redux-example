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

export interface IVariant {
  productId: string;
  model: string;
  image: {
    url: string;
    alt: string;
    title: string;
  };
  unitPrice: number;
  maxOrderQuantity: number;
  inStock: boolean;
}
