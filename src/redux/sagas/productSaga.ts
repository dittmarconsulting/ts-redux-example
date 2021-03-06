import { takeEvery, call, put } from 'redux-saga/effects';

import C from '../constants';
import * as Api from '../../utility/api';
import {
  setProducts,
  setSelectedProduct,
  setVariant,
} from '../actions/productActions';
import { IPresetSelectedProduct } from '../types/actions';
import { IVariant } from '../../types/productTypes';

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
      (a: IVariant, b: IVariant) => b.unitPrice - a.unitPrice,
    )[0];
    yield put(setVariant(highestPriceVariant));
  } catch (error) {
    console.log('Error: workerSearchFAQs(): ', error);
  }
}
