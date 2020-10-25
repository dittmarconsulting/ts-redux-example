import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { colors, statusBarStyle } from './styles';
import { navStyles } from './navigation/styles';
import store from './redux/store';
import { ScreenWrapper } from './components/ScreenWrapper';
import ProductsView from './screens/ProductsView';

// @ts-ignore
ProductsView.options = {
  topBar: {
    title: {
      text: 'Products',
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
