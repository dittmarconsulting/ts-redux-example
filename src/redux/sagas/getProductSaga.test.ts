import { expectSaga } from 'redux-saga-test-plan';
import fetchMock from 'jest-fetch-mock';

import { workerFetchProducts } from './getProductSaga';
import * as Api from '../../utility/api';
import { storeProducts } from '../actions/productActions';

import { mockData } from '../../mockData';

describe('Fetching products', () => {
  beforeEach(() => {
    fetchMock.once(JSON.stringify(mockData.data), { status: 200 });
  });

  it('should fetch the products and put it in the store', () => {
    return expectSaga(workerFetchProducts)
      .call(Api.getProducts)
      .put(storeProducts(mockData.data))
      .run();
  });
});
