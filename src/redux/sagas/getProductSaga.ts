import { takeEvery, call, put } from 'redux-saga/effects';

import C from '../constants';
import * as Api from '../../utility/api';
import { setProducts } from '../actions/productActions';

export function* watchFetchProducts() {
  yield takeEvery(C.PRESET_PRODUCTS, workerFetchProducts);
}

export function* workerFetchProducts() {
  try {
    const getProductsResponse = yield call(Api.getProducts);
    yield put(setProducts(getProductsResponse));
  } catch (error) {
    console.log('Error: workerSearchFAQs(): ', error);
  }
}
