import styled from 'styled-components';

const TextContainer = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    
    width: 8.625rem;
    height: 2.25rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: ${props => props.$isActive ? '#FF868E' : '#FFF'};

    &:hover {
        background: #FBE0DC;
    }

    &:active {
        background: #FF868E;
    }
`;

const StyledText = styled.p<{ $isActive: boolean }>`
    width: 8.625rem;

    color: ${props => props.$isActive ? '#FFF' : '#FF868E'};
    text-align: center;
    font-family: Jost;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0.125rem;

    text-transform: uppercase;

    &:active {
        color: #FFF;
    }
`;

type TextProps = {
    children?: string;
    $isActive: boolean;
};

function TextButton({ children, $isActive }: TextProps) {
    return (
        <TextContainer $isActive={$isActive}>
            <StyledText $isActive={$isActive}>{children}</StyledText>
        </TextContainer>
    );
}

export default TextButton;
