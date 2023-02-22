import styled from 'styled-components';
import { useState } from 'react';
import { useProducts } from '../../hooks/products';
import { getUniqueArrItems } from '../../utils/array';
import { Popover } from 'react-tiny-popover';
import { Link, generatePath } from 'react-router-dom';
import { lightBorderColor } from '../../consts/color';
import { PRODUCTS_LIST_PATH } from '../../routes/const';

const CategoriesButton = () => {
  const [hovered, setHovered] = useState(false);

  const { data } = useProducts();
  const products = data || [];
  const uniqueCategories = getUniqueArrItems(products.map((product) => product.type));

  return (
    <Popover
      isOpen={hovered}
      positions={['bottom', 'left', 'right']}
      onClickOutside={() => setHovered(false)}
      content={
        <ContentContainer onMouseLeave={() => setHovered(false)}>
          {uniqueCategories.map((category) => (
            <p key={category} onClick={() => setHovered(false)}>
              <Link to={generatePath(PRODUCTS_LIST_PATH, { category })}>{category}</Link>
            </p>
          ))}
        </ContentContainer>
      }
    >
      <Container onMouseEnter={() => setHovered(true)}>Categories</Container>
    </Popover>
  );
};

export default CategoriesButton;

const Container = styled.p`
  font-size: 19px;
  cursor: pointer;
`;
const ContentContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid ${lightBorderColor};
  border-radius: 5px;
  width: 205px;
  margin-left: 24px;
  margin-top: 4px;
  p {
    padding-top: 8px;
    font-size: 13px;
    text-transform: uppercase;
  }
`;
