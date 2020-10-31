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
  IPresetSelectedProduct,
  ISetSelectedProduct,
} from '../../redux/types/actions';
import { Colors } from '../../styles';
import { ActionCreator } from '../../redux/actions';
import { IProduct } from '../../types/productTypes';
import { IProductState } from '../../redux/types/reducers';
import { ProductCard } from '../../components/ProductCard';
import { ProductDetail } from '../ProductDetail';

const StyledFlatList = styled.FlatList`
  background-color: ${Colors.silver};
`;

interface IProps {
  componentId: string;
  products: IProduct[];
  presetProducts: () => IFetchProducts;
  presetSelectedProduct: (product: IProduct) => IPresetSelectedProduct;
  setSelectedProduct: (product: IProduct) => ISetSelectedProduct;
}

export const ProductsView: NavigationFunctionComponent<IProps> = memo(
  ({ componentId, products, presetProducts, presetSelectedProduct }) => {
    useEffect(() => {
      products.length === 0 && presetProducts();
    }, [products.length, presetProducts]);

    const handleOnProductPress = (product: IProduct) => {
      presetSelectedProduct(product);
      Navigation.push(componentId, {
        component: {
          name: ProductDetail.NavigationName,
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
    presetProducts: action.presetProducts,
    presetSelectedProduct: action.presetSelectedProduct,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
