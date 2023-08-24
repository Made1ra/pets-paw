import styled from 'styled-components';

const RectangleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
`;

const StyledRectangle = styled.div<{ $backgroundColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 8.625rem;
    height: 12.375rem;
    flex-shrink: 0;

    border-radius: 1.25rem;
    border: 4px solid rgba(255, 255, 255, 0.60);
    background: ${props => props.$backgroundColor};

    &:hover {
        border: 4px solid #FFF;
    }

    &:active {
        border: 4px solid #FBE0DC;
    }
`;

const Image = styled.div<{ $url: string }>`
    width: 6.25rem;
    height: 7.77925rem;
    flex-shrink: 0;

    background: url(${props => props.$url}), lightgray 50% / cover no-repeat;
    background-color: inherit;
`;

type RectangleProps = {
    $backgroundColor: string;
    $url: string;
};

function Rectangle({ $backgroundColor, $url }: RectangleProps) {
    return (
        <RectangleContainer>
            <StyledRectangle $backgroundColor={$backgroundColor}>
                <Image $url={$url} />
            </StyledRectangle>
        </RectangleContainer>
    );
}

export default Rectangle;
