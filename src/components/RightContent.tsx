import styled from 'styled-components';

const StyledRightContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: -8.5rem;
`;

type RightContentProps = {
    children?: React.ReactNode;
};

function RightContent({ children }: RightContentProps) {
    return (
        <StyledRightContent>{children}</StyledRightContent>
    );
}

export default RightContent;
