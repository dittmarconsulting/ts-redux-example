import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

import { containerProps, colors } from '../styles';
import { ProductDescription } from './ProductDescription';

const Container = styled(TouchableOpacity)`
  ${containerProps.row}
  background-color: ${colors.white};
  height: 150px;
  margin-top: 10px;
  padding-left: 40px;
  padding-right: 20px;
`;

const StyledImage = styled(Image)`
  width: 100px;
  margin-right: 20px;
`;

const resizeMode = {
  resizeMode: 'contain',
};

export const ProductCard = ({ product, onProductPress = () => {} }) => (
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
