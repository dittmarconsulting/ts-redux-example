import ProductDetailView from './ProductDetailView';
const NavigationName = 'App.ProductDetail';

export const ProductDetail = {
  NavigationName,
  NavigationElement: ProductDetailView,
  props: {
    topBar: {
      title: {
        text: 'Product Details',
      },
    },
  },
};
