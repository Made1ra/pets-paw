import styled from 'styled-components';
import fav from '../assets/fav-20.svg';
import favFullWhite from '../assets/fav-full-white-30.svg';

const StyledHeart = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    
    cursor: pointer;

    background: url(${fav}) center no-repeat #FFF;

    &:hover {
        background: url(${fav}) center no-repeat, #FF868E4D;
    }

    &:active {
        background: url(${favFullWhite}) center no-repeat, #FF868E;
    }
`;

function Heart() {
    return (
        <StyledHeart />
    );
}

export default Heart;
