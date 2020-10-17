import React, { FC, ReactNode } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { colors, statusBarStyle } from '../styles';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex-grow: 1;
  background-color: ${colors.toryBlue};
`;

interface IProps {
  children: ReactNode;
}

export const ScreenWrapper: FC<IProps> = (props) => (
  <>
    <StatusBar barStyle={statusBarStyle.light} />
    <StyledSafeAreaView {...props} />
  </>
);
