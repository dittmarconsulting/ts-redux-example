import C from '../constants';
import { IProduct, IVariant } from '../../types/productTypes';

export interface ISyncStore {
  type: typeof C.PRESET_STORE_SYNCED;
}

export interface IFetchProducts {
  type: typeof C.PRESET_PRODUCTS;
}

export interface IStoreProducts {
  type: typeof C.SET_PRODUCTS;
  payload: IProduct[];
}

export interface IPresetSelectedProduct {
  type: typeof C.PRESET_SELECTED_PRODUCT;
  payload: IProduct;
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
  type: typeof C.SET_QUANTITY_DECREMENT;
}

export type ActionTypes =
  | ISyncStore
  | IFetchProducts
  | IStoreProducts
  | IPresetSelectedProduct
  | ISetSelectedProduct
  | ISetProductVariant
  | ISetQuantityIncrement
  | ISetQuantityDecrement;
