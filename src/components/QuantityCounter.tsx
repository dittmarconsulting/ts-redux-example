import React, { FC, memo } from 'react';
import styled from 'styled-components/native';

import { ContainerProps, fontTypeProps, Colors } from '../styles';
import { PressType } from '../types/componentTypes';

const Container = styled.View`
  ${ContainerProps.row}
  background-color: ${Colors.white};
  height: 50px;
  border-width: 1px;
  border-color: ${Colors.cursedGrey};
`;

const CounterContainer = styled.TouchableOpacity`
  ${ContainerProps.center}
  width: 50px;
`;

const CounterTextContainer = styled.View`
  ${ContainerProps.flex}
  ${ContainerProps.center}
`;

const StyledCounterIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

const QuantityText = styled.Text`
  ${fontTypeProps.body}
`;

interface IProps {
  onIncrement: Function;
  onDecrement: Function;
  quantity: number;
  maxQuantity: number;
}

export const QuantityCounter: FC<IProps> = memo(
  ({
    onIncrement = () => {},
    onDecrement = () => {},
    quantity = 0,
    maxQuantity = 1,
  }) => (
    <Container>
      <CounterContainer
        disabled={quantity >= maxQuantity}
        onPress={onIncrement as PressType}>
        <StyledCounterIcon
          resizeMode="contain"
          source={
            quantity < maxQuantity
              ? require('../assets/plus.png')
              : require('../assets/plus_grey.png')
          }
        />
      </CounterContainer>
      <CounterTextContainer>
        <QuantityText>{`Qty ${quantity}`}</QuantityText>
      </CounterTextContainer>
      <CounterContainer
        disabled={quantity <= 0}
        onPress={onDecrement as PressType}>
        <StyledCounterIcon
          resizeMode="contain"
          source={
            quantity > 0
              ? require('../assets/minus.png')
              : require('../assets/minus_grey.png')
          }
        />
      </CounterContainer>
    </Container>
  ),
);
