import styled from 'styled-components';

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    
    width: 8.625rem;
    height: 2.25rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #FFF;

    &:hover {
        background: #FBE0DC;
    }

    &:active {
        background: #FF868E;
    }
`;

const StyledText = styled.p`
    width: 8.625rem;

    color: #FF868E;
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
};

function TextButton({ children }: TextProps) {
    return (
        <TextContainer>
            <StyledText>{children}</StyledText>
        </TextContainer>
    );
}

export default TextButton;
