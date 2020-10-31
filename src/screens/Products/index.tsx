import ProductsView from './ProductsView';
const NavigationName = 'App.Products';

export const Products = {
  NavigationName,
  NavigationElement: ProductsView,
  props: {
    topBar: {
      title: {
        text: 'Products',
      },
    },
  },
};
