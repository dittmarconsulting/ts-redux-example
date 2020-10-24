import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import {
  NavigationFunctionComponent,
  Navigation,
} from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ContainerProps, Colors } from '../../styles';
import {
  ActionTypes,
  IFetchProducts,
  ISetSelectedProduct,
} from '../../redux/types/actions';
import { ActionCreator } from '../../redux/actions';
import { IProductState } from '../../redux/types/reducers';
import { IProduct, IVariant } from '../../types/productTypes';
import { ProductDescription } from '../../components/ProductDescription';
import { QuantityCounter } from '../../components/QuantityCounter';
import { Button } from '../../components/Button';

const Container = styled.ScrollView`
  ${ContainerProps.column}
  ${ContainerProps.flex}
  background-color: ${Colors.white};
  padding: 30px;
`;

const StyledImage = styled.Image`
  height: 400px;
  width: 400px;
`;

interface IProps {
  componentId: string;
  selectedProduct: IProduct;
  selectedVariant: IVariant;
}

const ProductDetailView: NavigationFunctionComponent<IProps> = memo(
  ({ componentId, selectedProduct, selectedVariant }) => {
    const [counter, setCounter] = useState<number>(0);
    return (
      <Container
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}>
        <ProductDescription
          isCentered
          product={selectedProduct}
          variantPrice={selectedVariant?.unitPrice}
        />
        {selectedProduct?.variantOptions
          .sort((a, b) => a.unitPrice - b.unitPrice)
          .map((variant) => (
            <Button
              key={variant?.productId}
              onButtonPress={() => {}}
              buttonText={variant?.model}
            />
          ))}
        <StyledImage
          resizeMode="contain"
          source={{
            uri: selectedVariant?.image?.url,
          }}
        />
        <QuantityCounter
          onIncrement={() => setCounter(counter + 1)}
          onDecrement={() => setCounter(counter - 1)}
          quantity={counter}
          maxQuantity={10}
        />
      </Container>
    );
  },
);

const mapStateToProps = (state: { productState: IProductState }) => ({
  selectedProduct: state?.productState.selectedProduct,
  selectedVariant: state?.productState.selectedVariant,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  const action = bindActionCreators(ActionCreator, dispatch);
  return {
    presetProducts: action.presetProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailView);
