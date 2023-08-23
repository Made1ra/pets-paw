import styled from 'styled-components';
import TextInput from './TextInput';
import SearchButton from './SearchButton';

const StyledSearchBar = styled.div`
    width: 29.375rem;
    height: 3.75rem;
    flex-shrink: 0;

    border-radius: 1.25rem;
    border: none;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    
    &:hover {
        border: 2px solid #FBE0DC;
    }

    &:active {
        border: 2px solid #FF868E;
    }
`;

function SearchBar() {
    return (
        <StyledSearchBar>
            <TextInput />
            <SearchButton />
        </StyledSearchBar>
    );
}

export default SearchBar;
