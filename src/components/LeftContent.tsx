import styled from 'styled-components';

const StyledLeftContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
