import styled from 'styled-components';
import { searchBgColor } from '../../consts/color';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ value, setValue }) => {
  return (
    <>
      <InputWrapper>
        <AiOutlineSearch />
        <Input placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
      </InputWrapper>
    </>
  );
};

export default SearchBar;

const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 12px;
    top: 8px;
    font-size: 22px;
  }
`;

const Input = styled.input`
  background-color: ${searchBgColor};
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 10px 40px;
`;
