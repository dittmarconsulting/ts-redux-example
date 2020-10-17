import { all, spawn } from 'redux-saga/effects';

import { watchFetchProducts } from './sagas/getProductSaga';

export default function* rootSaga() {
  yield all([spawn(watchFetchProducts)]);
}
