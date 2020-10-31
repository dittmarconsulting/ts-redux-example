import { Navigation } from 'react-native-navigation';

import { navStyles } from './navigation/styles';
import { Products } from './screens/Products';
import { registerScreens } from './navigation';

Navigation.setDefaultOptions(navStyles);

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Products.NavigationName,
            },
          },
        ],
      },
    },
  });
});
