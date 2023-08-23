import styled from 'styled-components';

const StyledLink = styled.div`
    width: 3.75rem;
    height: 3.75rem;
    flex-shrink: 0;

    border-radius: 1.25rem;
    background: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #FBE0DC;
    }

    &:active {
        background: #FF868E;
    }
`;

const LinkImage = styled.div<{ $imageTitle: string }>`
    width: 1.875rem;
    height: 1.875rem;
    flex-shrink: 0;

    background: url(src/assets/${props => props.$imageTitle}-30.svg);

    &:active {
        background: url(src/assets/${props => props.$imageTitle}-white-30.svg);
    }
`;

export type LinkProps = {
    $imageTitle: string;
};

function Link({ $imageTitle }: LinkProps) {
    return (
        <StyledLink>
            <LinkImage $imageTitle={$imageTitle} />
        </StyledLink>
    );
}

export default Link;
