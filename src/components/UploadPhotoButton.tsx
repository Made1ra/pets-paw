import { useState } from 'react';
import styled from 'styled-components';
import loadingWhite from '../assets/loading-white-16.svg';

const StyledUploadButton = styled.button<{ $isHovered: boolean, $isActive: boolean }>`
    width: 10.75rem;
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: ${props => (props.$isHovered && !props.$isActive) ? '#FBE0DC' : '#FF868E'};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 4rem;
`;

const UploadImage = styled.div`
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;

    background: url(${loadingWhite});
    margin-right: 1rem;
`;

const UploadText = styled.p<{ $isHovered: boolean, $isActive: boolean }>`
    width: 3.5625rem;

    color: ${props => (props.$isHovered && !props.$isActive) ? '#FF868E' : '#FFFFFF'};
    text-align: center;
    font-family: Jost;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    white-space: nowrap;
`;

function UploadPhotoButton() {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <StyledUploadButton
            $isHovered={isHovered}
            $isActive={isActive}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsActive(false);
            }}
            onClick={() => setIsActive(true)}
        >
            {isActive && <UploadImage />}
            <UploadText
                $isHovered={isHovered}
                $isActive={isActive}
            >
                {isActive ? 'UPLOADING' : 'UPLOAD PHOTO'}
            </UploadText>
        </StyledUploadButton>
    );
}

export default UploadPhotoButton;
