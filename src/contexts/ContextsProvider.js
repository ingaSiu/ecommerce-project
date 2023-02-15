import { CartProvider } from './CartContext';
import { ProductProvider } from './ProductContext';
import { UserProvider } from './UserContext';

const ContextsProvider = ({ children }) => {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider>
    </UserProvider>
  );
};

export default ContextsProvider;
