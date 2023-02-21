import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CART_PATH, HOME_PATH } from '../routes/const';
import { FaShoppingCart } from 'react-icons/fa';
import EnhancedSearchBar from '../components/SearchBar/EnhancedSearchBar';

const Topbar = () => {
  return (
    <>
      <Container>
        <NavigationItem>Categories</NavigationItem>
        <Logo as={Link} to={HOME_PATH}>
          POHSE
        </Logo>
        <ItemContainer>
          {' '}
          <EnhancedSearchBar />
          <Link to={CART_PATH}>
            <FaShoppingCart fontSize={20} />
          </Link>
        </ItemContainer>
      </Container>
    </>
  );
};

export default Topbar;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Container = styled.div`
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #fff;
`;

const NavigationItem = styled.div`
  font-size: 19px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  color: inherit;
`;
