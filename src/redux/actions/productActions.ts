import C from '../constants';
import { IProduct, IVariant } from '../../types/productTypes';
import {
  IFetchProducts,
  IStoreProducts,
  ISetSelectedProduct,
  IPresetSelectedProduct,
  ISetProductVariant,
  ISetQuantity,
} from '../types/actions';

export const presetProducts = (): IFetchProducts => ({
  type: C.PRESET_PRODUCTS,
});

export const setProducts = (productList: IProduct[]): IStoreProducts => ({
  type: C.SET_PRODUCTS,
  payload: productList,
});

export const presetSelectedProduct = (
  product: IProduct,
): IPresetSelectedProduct => ({
  type: C.PRESET_SELECTED_PRODUCT,
  payload: product,
});

export const setSelectedProduct = (product: IProduct): ISetSelectedProduct => ({
  type: C.SET_SELECTED_PRODUCT,
  payload: product,
});

export const setVariant = (variant: IVariant): ISetProductVariant => ({
  type: C.SET_PRODUCT_VARIANT,
  payload: variant,
});

export const setQuantity = (quantity: number): ISetQuantity => ({
  type: C.SET_QUANTITY,
  payload: quantity,
});
