'use client';

import { useState } from 'react';

export default function PetImage({
    url,
    className,
    children
}: {
    url: string
    className?: string
    children?: React.ReactNode
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`w-52 h-36 cursor-pointer m-4 relative flex items-center justify-center flex-shrink-0 rounded-3xl bg-center bg-no-repeat bg-cover
            max-sm:w-[18.4375rem] max-sm:h-[12.90625rem]
            ${className}`}
            style={{
                backgroundImage: `url(${url})`,
                backgroundColor: 'rgba(211, 211, 211, 0.5)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <>
                    <div className="w-full h-full bg-rose-400 bg-opacity-60 rounded-3xl z-10" />
                    {children}
                </>
            )}
        </div>
    );
}
