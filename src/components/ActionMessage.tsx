import { Log } from '../store';
import styled from 'styled-components';
import likeColor from '../assets/like-color-20.svg';
import favColor from '../assets/fav-20.svg';
import dislikeColor from '../assets/dislike-color-20.svg';

const StyledActionMessage = styled.div`
    width: 40rem;
    height: 3.75rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #F8F8F7;
    display: flex;
    flex-direction: row;
    align-items: center;   
    justify-content: space-between;
    padding: 0 1rem;
`;

const Time = styled.div`
    width: 2.5625rem;

    color: #1D1D1D;
    font-family: Jost;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    margin-right: 2rem;
`;

const Text = styled.div`
    width: 100%;
    color: #8C8C8C;
    font-family: Jost;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    display: flex;
`;

const BoldText = styled.div`
    color: #1D1D1D;
    font-family: Jost;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    display: flex;
    margin: 0 0.5rem;
`;

const Image = styled.div<{ $url: string }>`
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    background: url(${props => props.$url}) center no-repeat;
`;

function ActionMessage({ dateOfEditing, reference_image_id, category, action }: Log) {
    let url = '';
    if (category === 'Likes') {
        url = likeColor;
    } else if (category === 'Favourites') {
        url = favColor;
    } else if (category === 'Dislikes') {
        url = dislikeColor;
    }
    
    return (
        <StyledActionMessage>
            <Time>{dateOfEditing}</Time>
            <Text>
                Image ID:<BoldText>{reference_image_id}</BoldText>was {action} {category}
            </Text>
            <Image $url={url} />
        </StyledActionMessage>
    );
}

export default ActionMessage;
