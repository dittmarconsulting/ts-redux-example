import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import store from '../redux/store';
import { ScreenWrapper } from '../components/ScreenWrapper';

import screens from '../screens';

export const registerScreens = (): void => {
  screens.map((screen) => {
    Navigation.registerComponent(
      screen.NavigationName,
      () => (props) => (
        <Provider store={store}>
          <ScreenWrapper>
            <screen.NavigationElement {...props} />
          </ScreenWrapper>
        </Provider>
      ),
      () => screen.NavigationElement,
    );
    screen.NavigationElement.options = { ...screen.props };
  });
};
