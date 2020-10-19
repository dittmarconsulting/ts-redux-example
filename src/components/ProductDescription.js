import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { containerProps, fontTypeProps, colors } from '../styles';
import { getPrice } from '../utility/stringUtil';

const TextContainer = styled(View)`
  ${containerProps.flexShrink}
  ${containerProps.column}
  ${containerProps.jCenter}
	${(props) => props.isCentered && containerProps.aCenter}
  margin-bottom: 20px;
`;

const ProductPriceText = styled(Text)`
  ${fontTypeProps.body}
  color: ${colors.charcoal};
  margin-bottom: 10px;
`;

const DetailText = styled(Text)`
  ${fontTypeProps.detail}
  color: ${colors.cursedGrey};
  margin-bottom: 10px;
`;

export const ProductDescription = ({
  isCentered = false,
  product = null,
  variantPrice,
}) => (
  <TextContainer isCentered={isCentered}>
    <ProductPriceText>{product?.brand || ''}</ProductPriceText>
    <DetailText numberOfLines={2}>{product?.name || ''}</DetailText>
    <ProductPriceText>
      {product ? getPrice(product, variantPrice) : ''}
    </ProductPriceText>
  </TextContainer>
);
