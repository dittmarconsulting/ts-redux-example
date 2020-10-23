import { OptionsModalPresentationStyle } from 'react-native-navigation';

import { INavStyles } from '../types/iNavStyles';
import { Colors } from '../styles';

export const navStyles: INavStyles = Object.freeze({
  modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
  topBar: {
    title: {
      color: Colors.white,
    },
    background: {
      color: Colors.toryBlue,
    },
    backButton: {
      color: Colors.white,
      showTitle: false,
    },
  },
});
