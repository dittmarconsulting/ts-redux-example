import { combineReducers } from 'redux';

import { ReducerTypes } from '../types/reducers';
import { appState } from './appReducer';
import { productState } from './productReducer';

export default combineReducers<ReducerTypes>({
  appState,
  productState,
});
