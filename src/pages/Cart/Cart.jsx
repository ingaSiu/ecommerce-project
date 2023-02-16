// 1. cart atvaizduosim items (kaina x quantity)
// 1.1 Button apmoketi numeta i login/register page
// 2. Login page
// 3. register page
// 4.AuthContext susitvarkom, kad saugotu user

import { useContext } from 'react';
import styled from 'styled-components';
import { screenSize } from '../../consts/mediaQueries';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { LOGIN_PATH, CHECKOUT_PATH } from '../../routes/const';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Container>
      <Header>
        <h2>MY BAG</h2>
        <p>Items are reserved for 30 minutes</p>
      </Header>

      <CartContainer>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </CartContainer>

      <ButtonContainer>
        <Button as={Link} to={isLoggedIn ? CHECKOUT_PATH : LOGIN_PATH}>
          Checkout
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 0 auto;
`;
const CartContainer = styled.div`
  background-color: #fff;
  margin-bottom: 24px;
`;
const Header = styled.div`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
