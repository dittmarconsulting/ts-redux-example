import { all, spawn } from 'redux-saga/effects';

import {
  watchPresetProducts,
  watchPresetSelectedProduct,
} from './sagas/productSaga';

export default function* rootSaga() {
  yield all([spawn(watchPresetProducts), spawn(watchPresetSelectedProduct)]);
}
