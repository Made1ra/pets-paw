import { useState } from 'react';
import styled from 'styled-components';
import back from '../assets/back-20.svg';
import backWhite from '../assets/back-white-20.svg';

const StyledPreviousButton = styled.button<{ $isHovered: boolean, $isDisabled: boolean }>`
    display: flex;
    padding: 0.75rem 1.875rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    border-radius: 0.625rem;
    border: none;
    background: ${props => props.$isHovered ? '#FF868E' : '#FBE0DC'};
    background: ${props => props.$isDisabled && '#F8F8F7'};
`;

const Back = styled.div<{ $isHovered: boolean }>`
    width: 1rem;
    height: 1rem;
    background: url(${props => props.$isHovered ? backWhite : back}) center no-repeat;
`;

type PreviousButtonProps = {
    $isDisabled: boolean;
};

function PreviousButton({ $isDisabled }: PreviousButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledPreviousButton
            $isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            $isDisabled={$isDisabled}
        >
            <Back $isHovered={isHovered} />
        </StyledPreviousButton>
    );
}

export default PreviousButton;
