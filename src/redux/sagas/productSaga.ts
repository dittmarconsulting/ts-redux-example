import { takeEvery, call, put } from 'redux-saga/effects';

import C from '../constants';
import * as Api from '../../utility/api';
import {
  setProducts,
  setSelectedProduct,
  setProductVariant,
} from '../actions/productActions';
import { IPresetSelectedProduct } from '../types/actions';

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

export function* watchPresetSelectedProduct() {
  yield takeEvery(C.PRESET_SELECTED_PRODUCT, workerPresetSelectedProduct);
}

export function* workerPresetSelectedProduct(action: IPresetSelectedProduct) {
  try {
    const selectedProduct = action.payload;
    yield put(setSelectedProduct(selectedProduct));
    const highestPriceVariant = selectedProduct?.variantOptions?.sort(
      (a, b) => b.unitPrice - a.unitPrice,
    )[0];
    yield put(setProductVariant(highestPriceVariant));
  } catch (error) {
    console.log('Error: workerSearchFAQs(): ', error);
  }
}
