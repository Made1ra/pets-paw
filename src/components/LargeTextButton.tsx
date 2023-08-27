import styled from 'styled-components';

const TextContainer = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: ${props => props.$isActive ? '#FF868E' : '#FFF'};
    margin-left: 0.5rem;
    cursor: pointer;
    
    &:hover {
        background: #FBE0DC;
    }

    &:active {
        background: #FF868E;
    }
`;

const StyledText = styled.p<{ $isActive: boolean }>`
    width: fit-content;

    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.875rem;
    letter-spacing: 0.125rem;
    padding: 0 2rem;
    text-transform: uppercase;

    &:active {
        color: #FFF;
    }
`;

type TextProps = {
    children?: string;
    $isActive: boolean;
};

function LargeTextButton({ children, $isActive }: TextProps) {
    return (
        <TextContainer $isActive={$isActive}>
            <StyledText $isActive={$isActive}>{children}</StyledText>
        </TextContainer>
    );
}

export default LargeTextButton;
