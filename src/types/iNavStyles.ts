import { OptionsModalPresentationStyle } from 'react-native-navigation';

export interface INavStyles {
  modalPresentationStyle: OptionsModalPresentationStyle | undefined;
  topBar: {
    title: {
      color: string;
    };
    background: {
      color: string;
    };
    backButton: {
      color: string;
      showTitle: boolean;
    };
  };
}
