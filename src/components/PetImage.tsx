import { useState } from 'react';
import styled from 'styled-components';

const StyledPetImage = styled.div<{ $url: string }>`
    cursor: pointer;

    width: 12.5rem;
    height: 8.75rem;
    flex-shrink: 0;

    background: url(${props => props.$url}), lightgray 50% / cover no-repeat;
    background-size: cover;

    border-radius: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1rem;
    position: relative;
`;

type PetImageProps = {
    $url: string;
    children?: React.ReactNode;
};

function PetImage({ $url, children }: PetImageProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledPetImage
            $url={$url}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <>
                    <div className="w-full h-full bg-rose-400 bg-opacity-60 rounded-[20px] z-10" />
                    {children}
                </>
            )}
        </StyledPetImage>
    );
}

export default PetImage;

// import { useState } from 'react';

// type PetImageProps = {
//     url: string;
//     children?: React.ReactNode;
// };

// function PetImage({ url, children }: PetImageProps) {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div
//             className="w-52 h-36 cursor-pointer m-4 relative flex items-center justify-center flex-shrink-0 rounded-3xl"
//             style={{ background: `url(${url}), lightgray 50% / cover no-repeat` }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             {isHovered && (
//                 <>
//                     <div className="w-full h-full bg-rose-400 bg-opacity-60 rounded-[20px] z-10" />
//                     {children}
//                 </>
//             )}
//         </div>
//     );
// }

// export default PetImage;
