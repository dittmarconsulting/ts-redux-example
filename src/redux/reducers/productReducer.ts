import C from '../constants';
import { IProductState, ReducerTypes } from '../types/reducers';
import { ActionTypes } from '../types/actions';

const initState: IProductState = {
  products: [],
  selectedProduct: {},
  selectedVariant: [],
  quantity: 0,
};

export const productState = (
  state = initState,
  action: ActionTypes,
): IProductState => {
  switch (action.type) {
    case C.STORE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case C.SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case C.SET_PRODUCT_VARIANT:
      return {
        ...state,
        selectedVariant: action.payload,
      };
    case C.SET_QUANTITY_INCREMENT:
      return {
        ...state,
        quantity:
          state.quantity < state.selectedVariant?.maxOrderQuantity
            ? state.quantity + 1
            : state.quantity,
      };
    case C.SET_QUANTITY_DECREMENT:
      return {
        ...state,
        quantity: state.quantity > 0 ? state.quantity - 1 : state.quantity,
      };
    default:
      return state;
  }
};
