import styled from 'styled-components';
import update from '../assets/update-20.svg';
import updateWhite from '../assets/update-white-20.svg';

const OrderText = styled.div`
    width: 7rem;

    color: #8C8C8C;
    font-family: Jost;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem;

    text-transform: uppercase;
`;

const SelectContainer = styled.div`
    display: flex;
`;

const StyledSelect = styled.select`
    width: 18.125rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #FFF;

    &:hover {
        border: 2px solid #FBE0DC;
    }
`;

const Update = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;

    background: url(${update}) center no-repeat, #FFF;
    margin-left: 1rem;

    &:hover {
        background: url(${updateWhite}) center no-repeat, #FF868E;
    }
`;

function OrderSelect() {
    return (
        <>
            <OrderText>ORDER</OrderText>
            <SelectContainer>
                <StyledSelect>
                    <option>Random</option>
                </StyledSelect>
                <Update />
            </SelectContainer>
        </>
    );
}

export default OrderSelect;
