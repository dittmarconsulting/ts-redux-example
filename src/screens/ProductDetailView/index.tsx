import React, { memo, useEffect } from 'react';
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
    return (
      <Container>
        <ProductDescription
          isCentered
          product={selectedProduct}
          variantPrice={100}
        />
        <QuantityCounter
          onIncrement={() => {}}
          onDecrement={() => {}}
          quantity={0}
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
    fetchProducts: action.fetchProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailView);
