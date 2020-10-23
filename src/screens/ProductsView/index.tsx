import React, { memo, useEffect, ElementType } from 'react';
import {
  NavigationFunctionComponent,
  Navigation,
} from 'react-native-navigation';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { bindActionCreators, Dispatch } from 'redux';

import {
  ActionTypes,
  IFetchProducts,
  ISetSelectedProduct,
} from '../../redux/types/actions';
import { Colors } from '../../styles';
import { ActionCreator } from '../../redux/actions';
import { IProduct } from '../../types/iProduct';
import { IProductState } from '../../redux/types/reducers';
import { ProductCard } from '../../components/ProductCard';

const StyledFlatList = styled.FlatList`
  background-color: ${Colors.silver};
`;

interface IProps {
  componentId: string;
  products: IProduct[];
  fetchProducts: () => IFetchProducts;
  setSelectedProduct: (product: IProduct) => ISetSelectedProduct;
}

export const ProductsView: NavigationFunctionComponent<IProps> = memo(
  ({ componentId, products, fetchProducts, setSelectedProduct }) => {
    useEffect(() => {
      products.length === 0 && fetchProducts();
    }, [products.length, fetchProducts]);

    const handleOnProductPress = (product: IProduct) => {
      setSelectedProduct(product);
      Navigation.push(componentId, {
        component: {
          name: 'detail',
        },
      });
    };

    return (
      <StyledFlatList<ElementType>
        data={products}
        renderItem={({ item }: { item: IProduct }) => (
          <ProductCard product={item} onProductPress={handleOnProductPress} />
        )}
        keyExtractor={(item: IProduct) => item.id}
      />
    );
  },
);

const mapStateToProps = (state: { productState: IProductState }) => ({
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
