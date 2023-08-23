import styled from 'styled-components';
import LikeButton from './LikeButton';
import FavoriteButton from './FavoriteButton';
import DislikeButton from './DislikeButton';

const StyledControls = styled.div`
    width: 15.5rem;
    height: 5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
`;

function Controls() {
    return (
        <StyledControls>
            <LikeButton />
            <FavoriteButton />
            <DislikeButton />
        </StyledControls>
    );
}

export default Controls;
