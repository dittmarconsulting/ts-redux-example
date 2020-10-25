import React, { memo, useEffect } from 'react';
import {
  NavigationFunctionComponent,
  Navigation,
} from 'react-native-navigation';
import styled from 'styled-components/native';
import { FlatList, View, ListRenderItem } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux';

import {
  ActionTypes,
  IFetchProducts,
  ISetSelectedProduct,
} from '../../redux/types/actions';
import { colors } from '../../styles';
import { ActionCreator } from '../../redux/actions';
import { IProduct } from '../../types/iProduct';
import { IProductState } from '../../redux/types/reducers';
import { ProductCard } from '../../components/ProductCard';

const StyledFlatList = styled(FlatList)`
  background-color: ${colors.silver};
`;

interface IProps {
  componentId: string;
  products: IProduct[];
  fetchProducts: () => IFetchProducts;
}

export const ProductsView: NavigationFunctionComponent<IProps> = memo(
  ({ componentId, products, fetchProducts }) => {
    useEffect(() => {
      products.length === 0 && fetchProducts();
    }, [products.length, fetchProducts]);

    const handleOnProductPress = (product) => {
      // setSelectedProduct(product);
      // setup navigation
    };

    return (
      <StyledFlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard product={item} onProductPress={handleOnProductPress} />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  },
);

/*

*/

const mapStateToProps = (state: { productState: IProductState }) => ({
  products: state.productState.products,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  const action = bindActionCreators(ActionCreator, dispatch);
  return {
    fetchProducts: action.fetchProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
