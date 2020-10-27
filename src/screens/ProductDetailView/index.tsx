import React, { memo, useState } from 'react';
import styled from 'styled-components/native';
import {
  NavigationFunctionComponent,
  Navigation,
} from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ContainerProps, fontTypeProps, Colors } from '../../styles';
import { ActionTypes } from '../../redux/types/actions';
import { ActionCreator } from '../../redux/actions';
import { IProductState } from '../../redux/types/reducers';
import { IProduct, IVariant } from '../../types/productTypes';
import { ProductDescription } from '../../components/ProductDescription';
import { QuantityCounter } from '../../components/QuantityCounter';
import { Button } from '../../components/Button';
import { ImageLoader } from '../../components/ImageLoader';

const Container = styled.ScrollView`
  ${ContainerProps.column}
  ${ContainerProps.flex}
  background-color: ${Colors.white};
  padding: 30px;
`;

const ProductText = styled.Text`
  ${fontTypeProps.detail}
  color: ${Colors.charcoal};
`;

interface IProps {
  componentId: string;
  selectedProduct: IProduct | null;
  selectedVariant: IVariant | null;
  setVariant: (variant: IVariant) => void;
}

const ProductDetailView: NavigationFunctionComponent<IProps> = memo(
  ({ componentId, selectedProduct, selectedVariant, setVariant }) => {
    const [counter, setCounter] = useState<number>(0);

    const handleVariantButtonPress = (variant: IVariant) => {
      setVariant(variant);
    };

    const handleCheckoutButtonPress = () => {
      Navigation.push(componentId, {
        component: {
          name: 'products', // got to checkout
        },
      });
    };

    return (
      <Container
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}>
        <ProductDescription
          isCentered
          product={selectedProduct}
          variantPrice={selectedVariant?.unitPrice}
        />
        <ProductText>{selectedProduct?.shortDescription}</ProductText>
        {selectedProduct?.variantOptions
          .sort((a, b) => a.unitPrice - b.unitPrice)
          .map((variant) => (
            <Button
              key={variant?.productId}
              onButtonPress={() => handleVariantButtonPress(variant)}
              buttonText={variant?.model}
              buttonActiveColor={Colors.skyBlue}
              buttonActiveTextColor={Colors.white}
              isActive={variant?.productId === selectedVariant?.productId}
            />
          ))}
        <ImageLoader
          height={300}
          width={400}
          source={{ uri: selectedVariant?.image?.url }}
        />
        <QuantityCounter
          onIncrement={() => setCounter(counter + 1)}
          onDecrement={() => setCounter(counter - 1)}
          quantity={counter}
          maxQuantity={10}
        />
        <Button
          onButtonPress={handleCheckoutButtonPress}
          buttonText={'Checkout'}
          isDisabled={counter <= 0}
          textColor={Colors.white}
          buttonColor={Colors.rose}
          buttonDisabledColor={Colors.rose50}
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
    setVariant: action.setVariant,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailView);
