import React, { FC } from 'react';
import styled from 'styled-components/native';

import { containerProps, colors } from '../styles';
import { ProductDescription } from './ProductDescription';
import { IProduct } from '../types/iProduct';

const Container = styled.TouchableOpacity`
  ${containerProps.row}
  background-color: ${colors.white};
  height: 150px;
  margin-top: 10px;
  padding-left: 40px;
  padding-right: 20px;
`;

const StyledImage = styled.Image`
  width: 100px;
  margin-right: 20px;
`;

const resizeMode = {
  resizeMode: 'contain',
};

interface IProps {
  product: IProduct;
  onProductPress: (product: IProduct) => void;
}

export const ProductCard: FC<IProps> = ({
  product,
  onProductPress = () => {},
}) => (
  <Container onPress={() => onProductPress(product)}>
    <StyledImage
      style={resizeMode}
      source={{
        uri: product?.image.url,
      }}
    />
    <ProductDescription product={product} />
  </Container>
);
