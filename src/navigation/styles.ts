import { OptionsModalPresentationStyle } from 'react-native-navigation';

import { INavStyles } from '../types/iNavStyles';
import { colors } from '../styles';

export const navStyles: INavStyles = Object.freeze({
  modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
  topBar: {
    title: {
      color: colors.white,
    },
    background: {
      color: colors.toryBlue,
    },
    backButton: {
      color: colors.white,
      showTitle: false,
    },
  },
});
