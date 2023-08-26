import { useState } from 'react';
import styled from 'styled-components';
import sortRevert from '../assets/sort-revert-20.svg';
import sortRevertColor from '../assets/sort-revert-color-20.svg';
import { SortButtonProps } from './SortButton';

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

    margin-left: 0.5rem;
`;

const SortImage = styled.div<{ $isHovered: boolean }>`
    width: 1.15444rem;
    height: 1.25rem;
    flex-shrink: 0;

    background: url(${props => props.$isHovered ? sortRevertColor : sortRevert});
`;

function SortRevertButton({ onClick }: SortButtonProps) {
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

export default SortRevertButton;
