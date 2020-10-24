import { takeEvery, call, put } from 'redux-saga/effects';

import C from '../constants';
import * as Api from '../../utility/api';
import { setProducts } from '../actions/productActions';

export function* watchPresetProducts() {
  yield takeEvery(C.PRESET_PRODUCTS, workerPresetProducts);
}

export function* workerPresetProducts() {
  try {
    const response = yield call(Api.getProducts);
    yield put(setProducts(response));
  } catch (error) {
    console.log('Error: workerSearchFAQs(): ', error);
  }
}
