import React, { memo, useEffect } from 'react';
import {
  NavigationFunctionComponent,
  Navigation,
} from 'react-native-navigation';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

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

//https://github.com/styled-components/styled-components/issues/2955

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
      <FlatList
        style={flatListStyle}
        data={products}
        renderItem={({ item }: { item: IProduct }) => (
          <ProductCard product={item} onProductPress={handleOnProductPress} />
        )}
        keyExtractor={(item: IProduct) => item.id}
      />
    );
  },
);

// I tried to style the component with styled-components but ran into TS issues
// https://stackoverflow.com/questions/64460114/rn-flatlist-with-typescript-and-styled-components
const flatListStyle = { backgroundColor: colors.silver };

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
