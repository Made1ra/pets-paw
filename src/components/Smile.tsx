import styled from 'styled-components';
import like from '../assets/like-30.svg';
import likeWhite from '../assets/like-white-30.svg';
import fav from '../assets/fav-30.svg';
import favWhite from '../assets/fav-white-30.svg';
import dislike from '../assets/dislike-30.svg';
import dislikeWhite from '../assets/dislike-white-30.svg';

const StyledLink = styled.div<{ $url: string, $urlWhite: string }>`
    width: 3.75rem;
    height: 3.75rem;
    flex-shrink: 0;

    border-radius: 1.25rem;
    background: url(${props => props.$url}) center no-repeat;
    background-color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0.5rem;

    cursor: pointer;

    &:hover {
        background-color: #FBE0DC;
    }

    &:active {
        background: url(${props => props.$urlWhite}) center no-repeat;
        background-color: #FF868E;
    }
`;

export type SmileProps = {
    imageTitle: string;
};

function Smile({ imageTitle }: SmileProps) {
    let url = '';
    let urlWhite = '';
    if (imageTitle === 'like') {
        url = like;
        urlWhite = likeWhite;
    } else if (imageTitle === 'fav') {
        url = fav;
        urlWhite = favWhite;
    } else if (imageTitle === 'dislike') {
        url = dislike;
        urlWhite = dislikeWhite;
    }

    return (
        <StyledLink
            $url={url}
            $urlWhite={urlWhite}
        />
    );
}

export default Smile;
