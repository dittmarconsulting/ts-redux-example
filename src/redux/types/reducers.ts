import { IVariant, IProduct } from '../../types/productTypes';

export interface IAppState {
  readonly storeSynced: boolean;
}

export interface IProductState {
  readonly products: IProduct[];
  readonly selectedProduct: IProduct | null;
  readonly selectedVariant: IVariant | null;
  readonly quantity: number;
}

export type ReducerTypes = IAppState | IProductState;
