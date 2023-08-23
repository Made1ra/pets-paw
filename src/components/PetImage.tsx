import { useState } from 'react';
import styled from 'styled-components';
import fav from '../assets/fav-20.svg';

const StyledPetImage = styled.div<{ $url: string }>`
    width: 12.5rem;
    height: 9.36363rem;
    flex-shrink: 0;

    background: url(${props => props.$url}), lightgray 50% / cover no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        height: 8.75rem;
        border-radius: 1.25rem;
        background: rgba(255, 134, 142, 0.60);
    }
`;

const Heart = styled.div<{ $url: string }>`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    
    background: url(${props => props.$url}) center no-repeat #FFF;
`;

type PetImageProps = {
    $url: string;
};

function PetImage({ $url }: PetImageProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledPetImage
            $url={$url}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && <Heart $url={fav} />}
        </StyledPetImage>
    );
}

export default PetImage;
