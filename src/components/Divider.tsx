import React, { FC } from 'react';
import styled from 'styled-components/native';

import { ContainerProps, Colors } from '../styles';

type ContainerType = {
  mTop: number;
  mBottom: number;
  color: string;
};

const Container = styled.View<ContainerType>`
  ${ContainerProps.column}
  ${ContainerProps.grow}
	background-color: ${Colors.transparent};
  height: 1px;
  border-top-width: 1px;
  border-color: ${(props) => props.color};
  margin-top: ${(props) => `${props.mTop}px`};
  margin-bottom: ${(props) => `${props.mBottom}px`};
`;

interface IProps {
  mTop?: number;
  mBottom?: number;
  color?: string;
}

export const Divider: FC<IProps> = ({
  mTop = 15,
  mBottom = 15,
  color = Colors.cursedGrey,
}) => <Container mTop={mTop} mBottom={mBottom} color={color} />;
