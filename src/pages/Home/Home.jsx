import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { getUniqueArrItems } from '../../utils/array';
import styled from 'styled-components';
import ProductCategory from './ProductCategory';

const Home = () => {
  const { products } = useContext(ProductContext);
  const uniqueCategories = getUniqueArrItems(products.map((product) => product.type));

  const categories = uniqueCategories.map((category) => ({
    name: category,
    image: products.find((product) => product.type === category).picUrl,
  }));

  return (
    <Container>
      <ProductContainer>
        {categories.map((category) => (
          <ProductCategory key={category.name} name={category.name} image={category.image[0]} />
        ))}
      </ProductContainer>
    </Container>
  );
};

export default Home;

const ProductContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
