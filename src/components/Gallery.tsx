import { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';
import SearchBarContainer from './SearchBarContainer';
import SearchBar from './SearchBar';
import Link from './Link';
import SmallLink from './SmallLink';
import LargeTextButton from './LargeTextButton';

const RightContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const ActionsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 0.5rem;
    padding: 1rem;
    width: 42.5rem;
    height: 48.875rem;
    flex-shrink: 0;
    flex-direction: column;

    border-radius: 1.25rem;
    background: #FFF;
`;

const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
`;

type BreedsProps = {
    $isActive: number;
};

function Gallery({ $isActive }: BreedsProps) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [searchedBreeds, setSearchedBreeds] = useState<{ name: string, image: { url: string }, reference_image_id: string }[]>([]);

    const searchBreeds = async (searchTerm: string) => {
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        const data = await response.json();
        setSearchedBreeds(data);
    };

    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome $isActive={$isActive} />
            </LeftContent>
            <RightContentContainer>
                <SearchBarContainer>
                    <SearchBar onSearch={searchBreeds} />
                    <Link imageTitle="like" />
                    <Link imageTitle="fav" />
                    <Link imageTitle="dislike" />
                </SearchBarContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton $isActive={true}>GALLERY</LargeTextButton>
                    </NavigationContainer>
                </ActionsContainer>
            </RightContentContainer>
        </Container>
    );
}

export default Gallery;
