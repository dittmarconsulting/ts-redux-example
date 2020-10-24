import React, { FC } from 'react';
import styled from 'styled-components/native';

import { ContainerProps, fontTypeProps, Colors } from '../styles';

interface IStyledButtonProp {
  buttonColor: string | undefined;
  onPress: () => void;
}

const StyledButton = styled.TouchableOpacity<IStyledButtonProp>`
  ${ContainerProps.center}
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.buttonColor || Colors.silver};
  margin-bottom: 5px;
  border-radius: 5px;
`;

interface ITextProp {
  textColor: string | undefined;
}

const ButtonText = styled.Text<ITextProp>`
  ${fontTypeProps.body}
  color: ${(props) => props.textColor || Colors.charcoal};
`;

interface IButtonProp {
  buttonText: string;
  buttonColor?: string;
  textColor?: string;
  onButtonPress: () => void;
}

export const Button: FC<IButtonProp> = ({
  buttonText,
  buttonColor,
  textColor,
  onButtonPress = () => {},
}) => (
  <StyledButton buttonColor={buttonColor} onPress={onButtonPress}>
    <ButtonText textColor={textColor}>{buttonText}</ButtonText>
  </StyledButton>
);
