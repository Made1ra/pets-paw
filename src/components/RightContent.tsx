import styled from 'styled-components';

const StyledRightContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
