import { useState } from 'react';
import styled from 'styled-components';
import sort from '../assets/sort-20.svg';
import sortColor from '../assets/sort-color-20.svg';

const StyledSortButton = styled.button<{ $isHovered: boolean }>`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: ${props => props.$isHovered && '#FBE0DC'};
    border: ${props => props.$isHovered ? '2px solid #FBE0DC' : 'none'};

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 0.5rem;
`;

const SortImage = styled.div<{ $isHovered: boolean }>`
    width: 1.15444rem;
    height: 1.25rem;
    flex-shrink: 0;

    background: url(${props => props.$isHovered ? sortColor : sort});
`;

export type SortButtonProps = {
    onClick?: () => void;
};

function SortButton({ onClick }: SortButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledSortButton
            $isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <SortImage $isHovered={isHovered} />
        </StyledSortButton>
    );
}

export default SortButton;
