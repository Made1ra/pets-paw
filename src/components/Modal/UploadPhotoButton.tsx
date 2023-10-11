import { useState } from 'react';
// '../src/assets/loading-white-16.svg'

// const StyledUploadButton = styled.button<{ $isHovered: boolean, $isActive: boolean }>`
//     width: 10.75rem;
//     height: 2.5rem;
//     flex-shrink: 0;

//     border-radius: 0.625rem;
//     background: ${props => (props.$isHovered && !props.$isActive) ? '#FBE0DC' : '#FF868E'};
//     border: none;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding-right: 4rem;
// `;

// const UploadImage = styled.div`
//     width: 1rem;
//     height: 1rem;
//     flex-shrink: 0;

//     background: url(${loadingWhite});
//     margin-right: 1rem;
// `;

// const UploadText = styled.p<{ $isHovered: boolean, $isActive: boolean }>`
//     width: 3.5625rem;

//     color: ${props => (props.$isHovered && !props.$isActive) ? '#FF868E' : '#FFFFFF'};
//     text-align: center;
//     font-family: Jost;
//     font-size: 0.75rem;
//     font-style: normal;
//     font-weight: 500;
//     line-height: 1rem;
//     letter-spacing: 0.125rem;
//     text-transform: uppercase;
//     white-space: nowrap;
// `;

type UploadPhotoButton = {
    onClick?: () => void;
};

function UploadPhotoButton({ onClick }: UploadPhotoButton) {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`flex items-center justify-center self-center text-center w-[10.75rem] h-10 mt-8 rounded-[0.625rem]
            ${isHovered ? 'bg-red-100' : 'bg-rose-400'}
            ${isActive && 'bg-rose-400'}`}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsActive(false);
            }}
            onClick={() => {
                setIsActive(true);
                onClick;
            }}
        >
            <div className={`w-28 text-center text-xs font-medium font-jost leading-none tracking-widest uppercase
            ${isHovered ? 'text-rose-400' : 'text-white'}
            ${isActive && 'text-white'}`}>
                {isActive ? 'UPLOADING' : 'UPLOAD PHOTO'}
            </div>
        </button>
    );
}

export default UploadPhotoButton;
