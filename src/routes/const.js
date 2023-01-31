import Home from '../pages/Home/Home';
import Products from '../pages/Home/Products/Products';

export const HOME_PATH = '/';
export const PRODUCTS_LIST_PATH = `${HOME_PATH}:category`;

// kai prisides dar /:category/:itemId ,tai
// export const ITEM_PATH = `${PRODUCT_LIST_PATH}:itemId

export const routes = [
  {
    path: HOME_PATH,
    Component: Home,
  },
  {
    path: PRODUCTS_LIST_PATH,
    Component: Products,
  },
];
