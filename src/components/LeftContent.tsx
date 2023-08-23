import styled from 'styled-components';

const StyledLeftContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        margin-left: 1rem;
    }
`;

type LeftContentProps = {
    children?: React.ReactNode;
};

function LeftContent({ children }: LeftContentProps) {
    return (
        <StyledLeftContent>{children}</StyledLeftContent>
    );
}

export default LeftContent;
