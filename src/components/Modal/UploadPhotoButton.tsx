import { useState } from 'react';

type UploadPhotoButton = {
    isUploading: boolean;
    onClick?: () => void;
};

function UploadPhotoButton({ isUploading, onClick }: UploadPhotoButton) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`flex items-center justify-center self-center text-center w-[10.75rem] h-10 mt-8 rounded-[0.625rem]
            ${isHovered ? 'bg-red-100' : 'bg-rose-400'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {isUploading && (
                <div className={`w-4 h-4 rounded-full border-2
                ${isHovered ? 'border-rose-400' : 'border-white'}`} />
            )}
            <div className={`w-28 text-center text-xs font-medium font-jost leading-none tracking-widest uppercase
            ${isHovered ? 'text-rose-400' : 'text-white'}`}>
                {isUploading ? 'UPLOADING' : 'UPLOAD PHOTO'}
            </div>
        </button>
    );
}

export default UploadPhotoButton;
