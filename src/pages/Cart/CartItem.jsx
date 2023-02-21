import styled from 'styled-components';
import { euroSymbol } from '../../consts/currency';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const CartItem = ({ product, handleDecreaseQuantity, handleIncreaseQuantity }) => {
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
      <ItemQuantityContainer>
        <AiOutlineMinus onClick={handleDecreaseQuantity} />
        <ItemQuantity>{product.quantity}</ItemQuantity>
        <AiOutlinePlus onClick={handleIncreaseQuantity} />
      </ItemQuantityContainer>
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
const ItemQuantityContainer = styled.div`
  flex: 1;
  margin-right: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  user-select: none;

  svg {
    cursor: pointer;
  }
`;

const ItemQuantity = styled.p`
  font-size: 18px;
`;
