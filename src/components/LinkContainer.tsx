import styled from 'styled-components';

const StyledLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

type LinkContainerProps = {
    children?: React.ReactNode;
}

function LinkContainer({ children }: LinkContainerProps) {
    return (
        <StyledLinkContainer>{children}</StyledLinkContainer>
    );
}

export default LinkContainer;
