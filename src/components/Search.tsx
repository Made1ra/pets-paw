import { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';
import LinkContainer from './LinkContainer';
import Text from './TextSpan';
import SearchBar from './SearchBar';
import Smiles from './Smiles';
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
    align-items: center;
    flex-direction: row;
    margin-bottom: 1.5rem;
`;

const Image = styled.div<{ $url: string }>`
    width: 40rem;
    height: 22.5rem;
    flex-shrink: 0;

    border-radius: 1.25rem;
    background: url(${props => props.$url}), lightgray 50% no-repeat;
    background-size: cover;

    margin-top: 1rem;
`;

const BoldText = styled.span`
    color: #1D1D1D;
    font-family: Jost;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

function Search() {
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
                <Welcome $isActive={4} />
            </LeftContent>
            <RightContentContainer>
                <LinkContainer>
                    <SearchBar onSearch={searchBreeds} />
                    <Smiles />
                </LinkContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton $isActive={true}>SEARCH</LargeTextButton>
                    </NavigationContainer>
                    {searchedBreeds.length > 0 && (
                        <Text>
                            Search results for: <BoldText>{searchedBreeds[0].name}</BoldText>
                        </Text>
                    )}
                    {
                        searchedBreeds.map((breed) => (
                            <Image
                                key={breed.reference_image_id}
                                $url={breed.image.url || ''}
                            />
                        ))
                    }
                </ActionsContainer>
            </RightContentContainer>
        </Container>
    );
}

export default Search;
