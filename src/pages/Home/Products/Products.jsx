import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductContext';
import { capitalizeFirstLetter } from '../../../utils/string';
import styled from 'styled-components';
import Select from 'react-select';

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
    <div>
      <FiltersContainer>
        <Filter>
          <Select isMulti name="colors" options={[]} />
        </Filter>
      </FiltersContainer>
      <ProductsContainer>
        {categoryProducts.map((product) => (
          <ProductItem key={product.id}>
            <img src={product.picUrl[0]} alt={product.name} />

            <ProductProperty>{capitalizeFirstLetter(product.name.toLowerCase())} </ProductProperty>

            <ProductProperty> € {product.price}</ProductProperty>
          </ProductItem>
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Products;

const FiltersContainer = styled.div`
  padding-left: 40px;
  padding-top: 40px;
  padding-right: 60px;
  display: flex;
`;

const Filter = styled.div`
  width: 250px;
`;
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px;
`;

const ProductItem = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #e7e3e1;
  img {
    flex: 1;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const ProductProperty = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  margin-left: 16px;
`;
