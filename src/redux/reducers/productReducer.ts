import C from '../constants';
import { IProductState } from '../types/reducers';
import {
  IStoreProducts,
  ISetSelectedProduct,
  ISetProductVariant,
  ISetQuantity,
  ActionTypes,
} from '../types/actions';

const initState: IProductState = {
  products: [],
  selectedProduct: null,
  selectedVariant: null,
  quantity: 2,
};

export const productState = (
  state = initState,
  action: ActionTypes,
): IProductState => {
  switch (action.type) {
    case C.SET_PRODUCTS:
      return {
        ...state,
        products: (action as IStoreProducts).payload,
      };
    case C.SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: (action as ISetSelectedProduct).payload,
      };
    case C.SET_PRODUCT_VARIANT:
      return {
        ...state,
        selectedVariant: (action as ISetProductVariant).payload,
      };
    case C.SET_QUANTITY:
      return {
        ...state,
        quantity: (action as ISetQuantity).payload,
      };
    default:
      return state;
  }
};
