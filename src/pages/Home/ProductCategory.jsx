import styled from 'styled-components';
import { useNavigate, generatePath } from 'react-router-dom';
import { PRODUCTS_LIST_PATH } from '../../routes/const';
const ProductCategory = ({ name, image }) => {
  const navigate = useNavigate();
  const productPath = generatePath(PRODUCTS_LIST_PATH, { category: name });

  return (
    <ProductItem onClick={() => navigate(productPath)}>
      <div>
        <p>{name}</p>
        <span>9</span>
      </div>
      <img src={image} alt={name} />
    </ProductItem>
  );
};

export default ProductCategory;

const ProductItem = styled.div`
  width: 15%;
  text-transform: uppercase;
  background-color: white;
  margin: 16px;
  /* border: 1px solid #e8e8e8; */
  border-radius: 4px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 16px;

    p {
      margin: 0;
      font-weight: 500;
    }
  }

  img {
    width: 100%;
  }
`;
