import C from '../constants';
import { IProduct } from '../../types/iProduct';
import { IVariant } from '../../types/iVariant';

export interface IFetchProducts {
  type: typeof C.FETCH_PRODUCTS;
}

export interface IStoreProducts {
  type: typeof C.STORE_PRODUCTS;
  payload: IProduct[];
}

export interface ISetSelectedProduct {
  type: typeof C.SET_SELECTED_PRODUCT;
  payload: IProduct;
}

export interface ISetProductVariant {
  type: typeof C.SET_PRODUCT_VARIANT;
  payload: IVariant;
}

export interface ISetQuantityIncrement {
  type: typeof C.SET_QUANTITY_INCREMENT;
}

export interface ISetQuantityDecrement {
  type: typeof C.SET_QUANTITY_INCREMENT;
}

export type ActionTypes = IFetchProducts | IStoreProducts | ISetSelectedProduct
  | ISetProductVariant
  | ISetQuantityIncrement
  | ISetQuantityDecrement;
