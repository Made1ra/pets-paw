import { useState } from 'react';

type UploadButtonProps = {
    onClick: () => void;
};

function UploadButton({ onClick }: UploadButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex items-center justify-center w-[143px] h-10 ml-80 bg-red-100 rounded-[10px] cursor-pointer
            hover:bg-rose-400"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div className={`w-4 h-4 mr-2 bg-no-repeat bg-center ${isHovered ? 'bg-[url("src/assets/upload-white-16.svg")]' : 'bg-[url("src/assets/upload-16.svg")]'}`} />
            <div className={`w-[57px] text-center text-rose-400 text-xs font-medium font-jost leading-none tracking-widest ${isHovered && 'text-white'}`}>
                UPLOAD
            </div>
        </div >
    );
}

export default UploadButton;
