import { useState } from 'react';
import Container from '../components/Container';
import LeftContent from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import TextSpan from '../components/TextSpan';
import BoldText from '../components/BoldText';
import SearchBar from '../components/SearchBar';
import Smiles from '../components/Smiles';
import ActionsContainer from '../components/ActionsContainer';
import NavigationContainer from '../components/NavigationContainer';
import SmallLink from '../components/SmallLink';
import LargeTextButton from '../components/LargeTextButton';
import Image from '../components/Image';

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
            <LeftContent isActive={4} />
            <RightSectionContainer>
                <LinkContainer>
                    <SearchBar onSearch={searchBreeds} />
                    <Smiles />
                </LinkContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton>SEARCH</LargeTextButton>
                    </NavigationContainer>
                    {searchedBreeds.length > 0 && (
                        <TextSpan className="mb-2">
                            Search results for: <BoldText>{searchedBreeds[0].name}</BoldText>
                        </TextSpan>
                    )}
                    {
                        searchedBreeds.map((breed) => (
                            <Image
                                key={breed.reference_image_id}
                                src={breed.image.url || ''}
                                alt={breed.name}
                            />
                        ))
                    }
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Search;
