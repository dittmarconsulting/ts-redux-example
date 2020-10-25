import { Reducer, combineReducers } from 'redux';

import { appState } from './appReducer';
import { productState } from './productReducer';

import { IProductState } from '../types/reducers';
import { ActionTypes } from '../types/actions';

const combinedReducer: Reducer<
  {
    appState: never;
    productState: IProductState;
  },
  ActionTypes
> = combineReducers({
  appState,
  productState,
});

export default combinedReducer;
