import { IReduxConstants } from './types/constants';

const constants: IReduxConstants = Object.freeze({
  STORE_SYNCED: 'STORE_SYNCED',
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  STORE_PRODUCTS: 'STORE_PRODUCTS',
  SET_SELECTED_PRODUCT: 'SET_SELECTED_PRODUCT',
  SET_PRODUCT_VARIANT: 'SET_PRODUCT_VARIANT',
  SET_QUANTITY_INCREMENT: 'SET_QUANTITY_INCREMENT',
  SET_QUANTITY_DECREMENT: 'SET_QUANTITY_DECREMENT',
});

export default constants;