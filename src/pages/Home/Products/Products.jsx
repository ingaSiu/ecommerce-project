import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { capitalizeFirstLetter } from '../../../utils/string';
import styled from 'styled-components';

const Products = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);

  // viena versija
  // const categoryProducts = products.filter((product) => product.type === category);
  // console.log(categoryProducts);

  // kita versija:
  const isCategory = (product) => product.type === category;
  const categoryProducts = products.filter(isCategory);
  console.log(categoryProducts);

  return (
    <ProductsContainer>
      {categoryProducts.map((product) => (
        <ProductItem key={product.id}>
          <img src={product.picUrl[0]} alt={product.name} />

          <ProductName>{capitalizeFirstLetter(product.name.toLowerCase())} </ProductName>
        </ProductItem>
      ))}
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px;
`;

const ProductItem = styled.div`
  margin: 24px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  img {
    flex: 1;
    border-radius: 5px;
    width: 100%;
    object-fit: cover;
  }
`;
const ProductName = styled.p`
  margin: 0;
`;
