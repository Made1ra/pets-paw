import styled from 'styled-components';
import dropdown from '../assets/dropdown-12.svg';

const StyledDropdown = styled.div`
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;

    background: url(${dropdown}) center no-repeat;
`;

function Dropdown() {
    return (
        <StyledDropdown />
    );
}

export default Dropdown;
