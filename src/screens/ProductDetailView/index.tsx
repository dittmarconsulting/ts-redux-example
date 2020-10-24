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
import { IProduct } from '../../types/iProduct';
import { ProductDescription } from '../../components/ProductDescription';
import { QuantityCounter } from '../../components/QuantityCounter';
import { Button } from '../../components/Button';

const Container = styled.ScrollView`
  ${ContainerProps.column}
  ${ContainerProps.flex}
  background-color: ${Colors.white};
  padding: 30px;
`;

interface IProps {
  componentId: string;
  selectedProduct: IProduct;
}

const ProductDetailView: NavigationFunctionComponent<IProps> = memo(
  ({ componentId, selectedProduct }) => {
    const [counter, setCounter] = useState<number>(0);
    return (
      <Container>
        <ProductDescription
          isCentered
          product={selectedProduct}
          variantPrice={100}
        />
        {selectedProduct?.variantOptions
          .sort((a, b) => a.unitPrice - b.unitPrice)
          .map((variant) => (
            <Button
              key={variant?.productId}
              onButtonPress={() => {}}
              buttonText={'Hello'}
            />
          ))}
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
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  const action = bindActionCreators(ActionCreator, dispatch);
  return {
    presetProducts: action.presetProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailView);
