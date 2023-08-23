import styled from 'styled-components';
import fav from '../assets/fav-30.svg';
import favWhite from '../assets/fav-white-30.svg';
import favFullWhite from '../assets/fav-full-white-30.svg';

const StyledFavoriteButton = styled.div`
    width: 5rem;
    height: 5rem;
    background: url(${favWhite}) center no-repeat, #FF868E;
    margin: 0 0.25rem;

    &:hover {
        background: url(${fav}) center no-repeat, #FF868E4D;
    }

    &:active {
        background: url(${favFullWhite}) center no-repeat, #FF868E;
    }
`;

function FavoriteButton() {
    return (
        <StyledFavoriteButton />
    );
}

export default FavoriteButton;
