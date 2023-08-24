import styled from 'styled-components';
// import likeColor from '../assets/like-color-20.svg';
// import favColor from '../assets/fav-20.svg';
// import dislikeColor from '../assets/dislike-color-20.svg';

const StyledActionMessage = styled.div`
    width: 40rem;
    height: 3.75rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #F8F8F7;
`;

const Time = styled.div`
    width: 2.5625rem;

    color: #1D1D1D;
    font-family: Jost;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
`;

const Text = styled.div`
    color: #8C8C8C;
    font-family: Jost;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
`;

const BoldText = styled.div`
    color: #1D1D1D;
    font-family: Jost;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
`;

const Image = styled.div<{ $url: string }>`
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;

    background: url(${props => props.$url}) center no-repeat;
`;

type ActionMessageProps = {
    time: string;
    imageId: string;
    url: string;
    action: string;
};

function ActionMessage({ time, imageId, url, action }: ActionMessageProps) {
    return (
        <StyledActionMessage>
            <Time>{time}</Time>
            <Text>
                Image ID: <BoldText>{imageId}</BoldText> was {action} to
            </Text>
            <Image $url={url} />
        </StyledActionMessage>
    );
}

export default ActionMessage;
