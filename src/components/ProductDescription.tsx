import React, { FC } from 'react';
import styled from 'styled-components/native';

import { containerProps, fontTypeProps, colors } from '../styles';
import { getPrice } from '../utility/stringUtil';
import { IProduct } from '../types/iProduct';

type StyledType = {
  isCentered: boolean;
};

const TextContainer = styled.View<StyledType>`
  ${containerProps.flexShrink}
  ${containerProps.column}
  ${containerProps.jCenter}
	${(props) => props.isCentered && containerProps.aCenter}
`;

const ProductPriceText = styled.Text`
  ${fontTypeProps.body}
  color: ${colors.charcoal};
  margin-bottom: 10px;
`;

const DetailText = styled.Text`
  ${fontTypeProps.detail}
  color: ${colors.cursedGrey};
  margin-bottom: 10px;
`;

interface IProps {
  isCentered?: boolean;
  product: IProduct;
  variantPrice?: number;
}

export const ProductDescription: FC<IProps> = ({
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
