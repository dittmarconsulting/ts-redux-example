import React, { memo, useEffect } from 'react';
import { ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import {
  NavigationFunctionComponent,
  Navigation,
} from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { containerProps, colors } from '../../styles';
import {
  ActionTypes,
  IFetchProducts,
  ISetSelectedProduct,
} from '../../redux/types/actions';
import { ActionCreator } from '../../redux/actions';
import { IProductState } from '../../redux/types/reducers';

const Container = styled(ScrollView)`
  ${containerProps.column}
  ${containerProps.flex}
  background-color: ${colors.white};
  padding: 30px;
`;

interface IProps {
  componentId: string;
}

const ProductDetailView: NavigationFunctionComponent<IProps> = memo(
  ({ componentId }) => {
    return <Container></Container>;
  },
);

const mapStateToProps = (state: { productState: IProductState }) => ({
  products: state.productState.products,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  const action = bindActionCreators(ActionCreator, dispatch);
  return {
    fetchProducts: action.fetchProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailView);
