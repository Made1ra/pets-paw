import styled from 'styled-components';

const StyledPetImage = styled.div<{ $url: string }>`
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

    &:hover {
        height: 8.25rem;
    }
`;

type PetImageProps = {
    $url: string;
    children?: React.ReactNode;
};

function PetImage({ $url, children }: PetImageProps) {
    return (
        <StyledPetImage
            $url={$url}
        >
            {children}
        </StyledPetImage>
    );
}

export default PetImage;
