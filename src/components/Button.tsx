import React, { FC } from 'react';
import styled from 'styled-components/native';

import { ContainerProps, fontTypeProps, Colors } from '../styles';

interface IStyledButtonProp {
  isActive: boolean;
  buttonColor: string | undefined;
  buttonDisabledColor: string | undefined;
  buttonActiveColor: string | undefined;
  onPress: () => void;
}

const StyledButton = styled.TouchableOpacity<IStyledButtonProp>`
  ${ContainerProps.center}
  ${ContainerProps.grow}
  height: 60px;
  background-color: ${(props) =>
    props.disabled
      ? props.buttonDisabledColor
      : props.isActive
      ? props.buttonActiveColor
      : props.buttonColor};
  margin-bottom: 5px;
  border-radius: 5px;
`;

interface ITextProp {
  isActive?: boolean;
  textColor?: string;
  buttonActiveTextColor?: string;
}

const ButtonText = styled.Text<ITextProp>`
  ${fontTypeProps.body}
  color: ${(props) =>
    props.isActive
      ? props.buttonActiveTextColor || Colors.charcoal
      : props.textColor || Colors.charcoal};
`;

interface IButtonProp {
  isDisabled?: boolean;
  isActive?: boolean;
  buttonText: string;
  buttonColor?: string;
  buttonDisabledColor?: string;
  buttonActiveColor?: string;
  buttonActiveTextColor?: string;
  textColor?: string;
  onButtonPress: () => void;
}

export const Button: FC<IButtonProp> = ({
  isDisabled = false,
  isActive = false,
  buttonText,
  buttonColor = Colors.silver,
  buttonDisabledColor = Colors.silver50,
  buttonActiveColor = Colors.silver,
  buttonActiveTextColor = Colors.charcoal,
  textColor,
  onButtonPress = () => {},
}) => (
  <StyledButton
    buttonColor={buttonColor}
    buttonDisabledColor={buttonDisabledColor}
    buttonActiveColor={buttonActiveColor}
    disabled={isDisabled}
    isActive={isActive}
    onPress={onButtonPress}>
    <ButtonText
      isActive={isActive}
      textColor={textColor}
      buttonActiveTextColor={buttonActiveTextColor}>
      {buttonText}
    </ButtonText>
  </StyledButton>
);
