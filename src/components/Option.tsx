import styled from 'styled-components';

const StyledOption = styled.option`
    color: #8C8C8C;
    font-family: Jost;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
`;

type OptionProps = {
    children?: string;
}

function Option({ children }: OptionProps) {
    return (
        <StyledOption>{children}</StyledOption>
    );
}

export default Option;
