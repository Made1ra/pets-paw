import styled from 'styled-components';
import likeWhite from '../assets/like-white-30.svg';
import likeColor from '../assets/like-color-30.svg';

const StyledLikeButton = styled.div`
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    background: url(${likeWhite}) center no-repeat, #97EAB9;
    border-radius: 1rem 0 0 1rem;

    &:hover {
        background: url(${likeColor}) center no-repeat, #97EAB94D;
    }
`;

type LikeButtonProps = {
    onClick: () => void;
};

function LikeButton({ onClick }: LikeButtonProps) {
    return (
        <StyledLikeButton onClick={onClick} />
    );
}

export default LikeButton;
