import Home from '../pages/Home/Home';
import Products from '../pages/Home/Products/Products';

const HOME_PATH = '/';
const PRODUCTS_LIST = '/:category';

export const routes = [
  {
    path: HOME_PATH,
    Component: Home,
  },
  {
    path: PRODUCTS_LIST,
    Component: Products,
  },
];
