import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import back from '../assets/back-20.svg';
import backWhite from '../assets/back-white-20.svg';

const StyledLink = styled.div<{ $isHovered: boolean }>`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: ${props => props.$isHovered ? '#FF868E' : '#FBE0DC'};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const LinkImage = styled.div<{ $isHovered: boolean }>`
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;

    background: url(${props => props.$isHovered ? backWhite : back});
`;

function SmallLink() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to="/"
            style={{ textDecoration: 'none' }}
        >
            <StyledLink
                $isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <LinkImage $isHovered={isHovered} />
            </StyledLink>
        </Link>
    );
}

export default SmallLink;
