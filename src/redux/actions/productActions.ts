import C from '../constants';
import { IProduct } from '../../types/iProduct';
import { IVariant } from '../../types/iVariant';
import {
  IFetchProducts,
  IStoreProducts,
  ISetSelectedProduct,
  ISetProductVariant,
  ISetQuantityIncrement,
  ISetQuantityDecrement,
} from '../types/actions';

export const fetchProducts = (): IFetchProducts => ({
  type: C.FETCH_PRODUCTS,
});

export const storeProducts = (productList: IProduct[]): IStoreProducts => ({
  type: C.STORE_PRODUCTS,
  payload: productList,
});

export const setSelectedProduct = (product: IProduct): ISetSelectedProduct => ({
  type: C.SET_SELECTED_PRODUCT,
  payload: product,
});

export const setProductVariant = (variant: IVariant): ISetProductVariant => ({
  type: C.SET_PRODUCT_VARIANT,
  payload: variant,
});

export const setQuantityIncrement = (): ISetQuantityIncrement => ({
  type: C.SET_QUANTITY_INCREMENT,
});

export const setQuantityDecrement = (): ISetQuantityDecrement => ({
  type: C.SET_QUANTITY_DECREMENT,
});
