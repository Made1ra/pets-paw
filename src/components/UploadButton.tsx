import { useState } from 'react';
import styled from 'styled-components';
import upload from '../assets/upload-16.svg';
import uploadWhite from '../assets/upload-white-16.svg';

const StyledUploadButton = styled.button<{ $isHovered: boolean }>`
    width: 8.9375rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: ${props => props.$isHovered ? '#FF868E' : '#FBE0DC'};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const UploadImage = styled.div<{ $isHovered: boolean }>`
    width: 0.98538rem;
    height: 1rem;
    flex-shrink: 0;

    background: url(${props => props.$isHovered ? uploadWhite : upload});
    margin-right: 1rem;
`;

const UploadText = styled.p<{ $isHovered: boolean }>`
    width: 3.5625rem;

    color: ${props => props.$isHovered ? '#FFFFFF' : '#FF868E'};
    text-align: center;
    font-family: Jost;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
`;

function UploadButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledUploadButton
            $isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <UploadImage $isHovered={isHovered} />
            <UploadText $isHovered={isHovered}>UPLOAD</UploadText>
        </StyledUploadButton>
    );
}

export default UploadButton;
