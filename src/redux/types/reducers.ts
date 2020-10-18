import { IProduct } from '../../types/iProduct';
import { IVariant } from '../../types/iVariant';

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
