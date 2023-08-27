import styled from 'styled-components';

const StyledText = styled.span`
    color: #8C8C8C;
    font-family: Jost;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

type TextSpanProps = {
    children?: React.ReactNode;
}

function TextSpan({ children }: TextSpanProps) {
    return (
        <StyledText>{children}</StyledText>
    );
}

export default TextSpan;
