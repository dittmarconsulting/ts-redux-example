import React, { FC } from 'react';
import styled from 'styled-components/native';

import { ContainerProps, fontTypeProps, Colors } from '../styles';
import { getPrice } from '../utility/stringUtil';
import { IProduct } from '../types/productTypes';

type ViewType = {
  isCentered: boolean;
};

const TextContainer = styled.View<ViewType>`
  ${ContainerProps.flexShrink}
  ${ContainerProps.column}
  ${ContainerProps.jCenter}
	${(props) => props.isCentered && ContainerProps.aCenter}
`;

const ProductPriceText = styled.Text`
  ${fontTypeProps.body}
  color: ${Colors.charcoal};
  margin-bottom: 10px;
`;

const DetailText = styled.Text`
  ${fontTypeProps.detail}
  color: ${Colors.cursedGrey};
  margin-bottom: 10px;
`;

interface IProps {
  isCentered?: boolean;
  product: IProduct | null;
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
