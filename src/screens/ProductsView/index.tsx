import React, { memo, useEffect } from 'react';
import {
  NavigationFunctionComponent,
  Navigation,
} from 'react-native-navigation';
import styled from 'styled-components/native';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux';
import {ActionTypes} from '../../redux/types/actions';

import { ActionCreator } from '../../redux/actions';
import { IProduct } from '../../types/iProduct';
import { IProductState } from '../../redux/types/reducers';

const Container = styled(View)`
  flex: 1;
  background-color: yellow;
`;

interface IProps {
  componentId: string;
  products: IProduct[];
  fetchProducts: () => ActionTypes
}

export const ProductsView: NavigationFunctionComponent<IProps> = memo(
  ({ componentId, products, fetchProducts }) => {
    useEffect(() => {
      products.length === 0 && fetchProducts();
    }, [products.length, fetchProducts]);

    useEffect(() => {
      console.log(products);
    }, [products]);

    return <Container></Container>;
  },
);

const mapStateToProps = (state: {productState: IProductState}) => ({
  products: state.productState.products,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  const action = bindActionCreators(ActionCreator, dispatch);
  return {
    fetchProducts: action.fetchProducts,
    setSelectedProduct: action.setSelectedProduct,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
