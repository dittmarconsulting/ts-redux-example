import React, { FC } from 'react';
import styled from 'styled-components/native';

import { ContainerProps, Colors } from '../styles';
import { ImageLoader } from './ImageLoader';
import { ProductDescription } from './ProductDescription';
import { IProduct } from '../types/productTypes';

const Container = styled.TouchableOpacity`
  ${ContainerProps.row}
  ${ContainerProps.aCenter}
  ${ContainerProps.jSpaceBtw}
  background-color: ${Colors.white};
  height: 150px;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
`;

interface IProps {
  style?: object;
  product: IProduct;
  onProductPress: (product: IProduct) => void;
}

export const ProductCard: FC<IProps> = ({
  product,
  onProductPress = () => {},
}) => (
  <Container onPress={() => onProductPress(product)}>
    <ImageLoader
      height={120}
      width={120}
      source={{
        uri: product?.image.url,
      }}
    />
    <ProductDescription product={product} />
  </Container>
);
