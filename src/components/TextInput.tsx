import styled from 'styled-components';

const StyledTextInput = styled.input`
    color: #8C8C8C;
    font-family: Jost;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
    border: none;
    outline: none;
    padding-left: 1rem;
    
    &:active {
        color: #1D1D1D;
    }
`;

function TextInput() {
    return (
        <StyledTextInput placeholder="Search for breeds by name" />
    );
}

export default TextInput;
