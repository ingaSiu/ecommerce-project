import styled from 'styled-components';
import { euroSymbol } from '../../consts/currency';

const CartItem = ({ product }) => {
  return (
    <Container key={product.id}>
      <img src={product.picUrl[0]} alt={product.name} />
      <div>
        <CartItemPrice>
          {euroSymbol}
          {product.price}
        </CartItemPrice>
        <p>{product.name}</p>
        <CartItemColor>{product.color}</CartItemColor>
      </div>
      <ItemQuantity>x{product.quantity}</ItemQuantity>
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
  display: flex;
  img {
    margin-right: 8px;
    object-fit: contain;
    width: 100px;
  }
`;

const CartItemPrice = styled.p`
  margin-top: 16px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const CartItemColor = styled.p`
  margin-top: 8px;
  font-weight: 300;
`;
const ItemQuantity = styled.div`
  flex: 1;
  align-self: center;
  margin-right: 32px;
  text-align: right;
`;
