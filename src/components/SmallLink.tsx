import { useState } from 'react';
import styled from 'styled-components';

const StyledLink = styled.div<{ $isHovered: boolean, $backgroundColor: string }>`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: ${props => props.$isHovered ? '#FF868E' : props.$backgroundColor};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const LinkImage = styled.div<{ $isHovered: boolean, $imageTitle: string }>`
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;

    background: ${props => !props.$isHovered && `url(src/assets/${props.$imageTitle}-20.svg)`};
    background: ${props => props.$isHovered && `url(src/assets/${props.$imageTitle}-white-20.svg)`};
`;

type SmallLinkProps = {
    $backgroundColor: string;
    $imageTitle: string;
};

function SmallLink({ $backgroundColor, $imageTitle }: SmallLinkProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledLink
            $isHovered={isHovered}
            $backgroundColor={$backgroundColor}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <LinkImage
                $isHovered={isHovered}
                $imageTitle={$imageTitle}
            />
        </StyledLink>
    );
}

export default SmallLink;
