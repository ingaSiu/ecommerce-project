import Home from '../pages/Home/Home';
import Products from '../pages/Home/Products/Products';
import MainLayout from '../layouts/MainLayout';

export const HOME_PATH = '/';
export const PRODUCTS_LIST_PATH = `${HOME_PATH}:category`;

// kai prisides dar /:category/:itemId ,tai
// export const ITEM_PATH = `${PRODUCT_LIST_PATH}:itemId

// kai noriu prideti route, kuris yra su mainLayout, tai dedu i sita:

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: PRODUCTS_LIST_PATH,
      Component: Products,
    },
  ],
};

// jei noriu prideti i kita layout, kur nera tam tikru elementu(pvz., topbar), spalvos skiriasi,tai rasau:

// export const authLayoutRoutes = {
//   Layout: AuthLayout,
//   routes: [
//     {
//       path: HOME_PATH,=> jau buti kiti routes
//       Component: Home,
//     },
//     {
//       path: PRODUCTS_LIST_PATH,
//       Component: Products,
//     },
//   ],
// };
