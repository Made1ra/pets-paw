import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    max-width: 90rem;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    float: right;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

type ContainerProps = {
    children?: React.ReactNode;
};

function Container({ children }: ContainerProps) {
    return (
        <StyledContainer>{children}</StyledContainer>
    );
}

export default Container;
