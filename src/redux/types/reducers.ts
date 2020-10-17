import { IProduct } from '../../types/iProduct';
import { IVariant } from '../../types/iVariant';

export interface IAppState {
  readonly storeSynced: boolean;
}

export interface IProductState {
  readonly products: IProduct[];
  readonly selectedProduct: {};
  readonly selectedVariant: IVariant[];
  readonly quantity: number;
}

export type ReducerTypes = IAppState | IProductState;
