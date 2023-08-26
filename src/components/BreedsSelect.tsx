import styled from 'styled-components';
import LeftContent from './LeftContent';
import Dropdown from './Dropdown';

const StyledSelect = styled.div`
    width: 14.125rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #F8F8F7;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 1rem;
    margin-left: 0.5rem;

    &:hover {
        border: 2px solid #FBE0DC;
    }
`;

const TextSelect = styled.div`
    color: #8C8C8C;
    font-family: Jost;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
`;

function BreedsSelect() {
    return (
        <StyledSelect>
            <LeftContent>
                <TextSelect>All breeds</TextSelect>
            </LeftContent>
            <Dropdown />
        </StyledSelect>
    );
}

export default BreedsSelect;
