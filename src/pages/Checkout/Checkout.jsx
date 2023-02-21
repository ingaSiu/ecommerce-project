import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../Cart/CartItem';
import { screenSize } from '../../consts/mediaQueries';
import PaymentForm from './PaymentForm';
import { useNavigate } from 'react-router-dom';
import { CART_PATH } from '../../routes/const';

const Checkout = () => {
  const { cartItems, handleUpdateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartItems.length) {
      //redirect to cart
      navigate(CART_PATH);
    }
  }, [cartItems.length, navigate]);

  return (
    <Container>
      <PaymentContainer>
        <PaymentForm />
      </PaymentContainer>
      <CartContainer>
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleIncreaseQuantity={() => handleUpdateQuantity(product.id, 'increase')}
            handleDecreaseQuantity={() => handleUpdateQuantity(product.id)}
          />
        ))}
      </CartContainer>
    </Container>
  );
};
export default Checkout;

const Container = styled.div`
  max-width: ${screenSize.laptop};
  display: flex;
  margin: 0 auto;
  gap: 32px;
`;

const PaymentContainer = styled.div`
  width: 60%;
`;
const CartContainer = styled.div`
  background-color: #fff;
  margin-bottom: 24px;
  width: 40%;
`;
