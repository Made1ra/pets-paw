import styled from 'styled-components';
import search from '../assets/search-20.svg';
import searchWhite from '../assets/search-white-20.svg';

const StyledSearchButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;

    border: none;
    border-radius: 0.625rem;
    background: url(${search}) center no-repeat, #FBE0DC;
    margin-right: 1rem;

    &:hover {
        background: url(${searchWhite}) center no-repeat, #FF868E;
    }
`;

function SearchButton() {
    return (
        <StyledSearchButton />
    );
}

export default SearchButton;