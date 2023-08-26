import styled from 'styled-components';

const StyledSearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 1rem;
`;

type SearchBarContainerProps = {
    children?: React.ReactNode;
};

function SearchBarContainer({ children }: SearchBarContainerProps) {
    return (
        <StyledSearchBarContainer>{children}</StyledSearchBarContainer>
    );
}

export default SearchBarContainer;
