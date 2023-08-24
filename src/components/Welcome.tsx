import { Link } from 'react-router-dom';
import styled from 'styled-components';
import voteTable from '../assets/vote-table.svg';
import petBreeds from '../assets/pet-breeds.svg';
import imagesSearch from '../assets/images-search.svg';
import Rectangle from './Rectangle';
import TextButton from './TextButton';

const HelloParagraph = styled.p`
    width: 11.375rem;

    color: #1D1D1D;
    font-family: Jost;
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3.625rem;
`;

const WelcomeParagraph = styled.p`
    color: #8C8C8C;
    font-family: Jost;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const LetsStartParagraph = styled.p`
    color: #1D1D1D;
    font-family: Jost;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const RectanglesContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

type WelcomeProps = {
    $isActive: number;
};

function Welcome({ $isActive }: WelcomeProps) {
    const rectangles = [
        {
            backgroundColor: '#B4B7FF',
            url: voteTable,
            text: 'VOTING'
        },
        {
            backgroundColor: '#97EAB9',
            url: petBreeds,
            text: 'BREEDS'
        },
        {
            backgroundColor: '#FFD280',
            url: imagesSearch,
            text: 'GALLERY'
        }
    ];

    return (
        <>
            <HelloParagraph>Hi!👋</HelloParagraph>
            <WelcomeParagraph>Welcome to MacPaw Bootcamp 2023</WelcomeParagraph>
            <br />
            <LetsStartParagraph>Lets start using The Cat API</LetsStartParagraph>
            <RectanglesContainer>
                {rectangles.map((rectangle, i) => (
                    <div key={rectangle.text}>
                        <Rectangle
                            $backgroundColor={rectangle.backgroundColor}
                            $url={rectangle.url}
                        />
                        <Link
                            to={`/${rectangle.text.toLowerCase()}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <TextButton $isActive={$isActive === i + 1}>{rectangle.text}</TextButton>
                        </Link>
                    </div>
                ))}
            </RectanglesContainer>
        </>
    );
}

export default Welcome;
