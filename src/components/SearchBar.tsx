import { useState } from 'react';
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
    margin: 1rem 0.5rem;

    &:hover {
        border: 2px solid #FBE0DC;
    }

    &:active {
        border: 2px solid #FF868E;
    }
`;

type SearchBarProps = {
    onSearch: (searchTerm: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <StyledSearchBar>
            <TextInput
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
            <SearchButton onClick={() => handleSearch()} />
        </StyledSearchBar>
    );
}

export default SearchBar;
