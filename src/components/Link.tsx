import styled from 'styled-components';

const StyledLink = styled.div<{ $imageTitle: string }>`
    width: 3.75rem;
    height: 3.75rem;
    flex-shrink: 0;

    border-radius: 1.25rem;
    background: url(src/assets/${props => props.$imageTitle}-30.svg) center no-repeat, #FFF;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0.75rem;

    cursor: pointer;

    &:hover {
        background: url(src/assets/${props => props.$imageTitle}-30.svg) center no-repeat, #FBE0DC;
    }

    &:active {
        background: url(src/assets/${props => props.$imageTitle}-white-30.svg) center no-repeat, #FF868E;
    }
`;

export type LinkProps = {
    $imageTitle: string;
};

function Link({ $imageTitle }: LinkProps) {
    return (
        <StyledLink
            $imageTitle={$imageTitle}
        />
    );
}

export default Link;
