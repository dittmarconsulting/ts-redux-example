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
