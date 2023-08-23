import styled from 'styled-components';
import dislikeWhite from '../assets/dislike-white-30.svg';
import dislikeColor from '../assets/dislike-color-30.svg';

const StyledDislikeButton = styled.div`
    width: 5rem;
    height: 5rem;
    background: url(${dislikeWhite}) center no-repeat, #FFD280;
    border-radius: 0 1rem 1rem 0;

    &:hover {
        background: url(${dislikeColor}) center no-repeat, #FFD2804D;
    }
`;

function DislikeButton() {
    return (
        <StyledDislikeButton />
    );
}

export default DislikeButton;
