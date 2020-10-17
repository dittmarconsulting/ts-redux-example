import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

import rootReducer from './reducers/index';
import { ActionCreator } from './actions/index';
import { storageKey } from './config.json';
import rootSaga from './rootSaga';
import C from './constants';

const sagaMiddleware = createSagaMiddleware();
const reducer = storage.reducer(rootReducer);
const engine = createEngine(storageKey);
const engineMiddleware = storage.createMiddleware(engine);

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        ActionCreator,
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(engineMiddleware, sagaMiddleware),
);

const store = createStore(reducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

const load = storage.createLoader(engine);
// load(store)
//   .then(() => {
//     store.dispatch({
//       type: C.STORE_SYNCED,
//       payload: true,
//     });
//   })
//   .catch(() => {
//     console.log('Failed to load previous state');
//   });

export default store;