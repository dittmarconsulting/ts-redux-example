import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { navStyles } from './navigation/styles';
import store from './redux/store';
import { ScreenWrapper } from './components/ScreenWrapper';
import ProductsView from './screens/ProductsView';
import ProductDetailView from './screens/ProductDetailView';

// @ts-ignore
ProductsView.options = {
  topBar: {
    title: {
      text: 'Products',
    },
  },
};

// @ts-ignore
ProductDetailView.options = {
  topBar: {
    title: {
      text: 'Product Details',
    },
  },
};

Navigation.registerComponent(
  'products',
  () => (props) => (
    <Provider store={store}>
      <ScreenWrapper>
        <ProductsView {...props} />
      </ScreenWrapper>
    </Provider>
  ),
  () => ProductsView,
);

Navigation.registerComponent(
  'detail',
  () => (props) => (
    <Provider store={store}>
      <ScreenWrapper>
        <ProductDetailView {...props} />
      </ScreenWrapper>
    </Provider>
  ),
  () => ProductsView,
);

Navigation.setDefaultOptions(navStyles);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'products',
            },
          },
        ],
      },
    },
  });
});
