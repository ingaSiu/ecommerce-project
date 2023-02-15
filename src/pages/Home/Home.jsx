import { getUniqueArrItems } from '../../utils/array';
import styled from 'styled-components';
import ProductCategory from './ProductCategory';
import { useTestData } from '../../hooks/test';
import { useProducts } from '../../hooks/products';

const Home = () => {
  const { data, isLoading, error } = useProducts();
  const products = data || [];
  const { data: testData, isLoading: testLoading } = useTestData();

  const uniqueCategories = getUniqueArrItems(products.map((product) => product.type));

  const categories = uniqueCategories.map((category) => ({
    name: category,
    image: products.find((product) => product.type === category).picUrl,
  }));
  //vienas is budu prie returna rasyti
  // if (isLoading) {
  //   return 'Loading...';
  // }
  if (error) {
    return 'Could not get the product';
  }
  return (
    //del stiliaus galima apsirasyti ir cia: bet cia nelabai graziai rasosi
    <Container>
      {isLoading ? (
        'Loading...'
      ) : (
        <ProductContainer>
          {categories.map((category) => (
            <ProductCategory key={category.name} name={category.name} image={category.image[0]} />
          ))}
        </ProductContainer>
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;
