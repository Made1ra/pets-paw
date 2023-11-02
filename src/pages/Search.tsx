import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import LeftContent from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import TextSpan from '../components/TextSpan';
import BoldText from '../components/BoldText';
import Burger from '../components/Burger/Burger';
import SearchBar from '../components/SearchBar';
import Smiles from '../components/Smiles';
import ActionsContainer from '../components/ActionsContainer';
import NavigationContainer from '../components/NavigationContainer';
import SmallLink from '../components/SmallLink';
import LargeTextButton from '../components/LargeTextButton';
import PetImage from '../components/PetImage';
import Button from '../components/Button';
import SearchGrid from '../components/Grid/SearchGrid';

function Search() {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [searchedBreeds, setSearchedBreeds] = useState<{ name: string, image: { url: string }, id: string }[]>([]);
    const [term, setTerm] = useState('');

    const searchBreeds = async (searchTerm: string) => {
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        const data = await response.json();
        setTerm(searchTerm);
        setSearchedBreeds(data);
    };

    return (
        <Container>
            <LeftContent isActive={4} />
            <RightSectionContainer>
                <LinkContainer>
                    <Burger isActive={4} />
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
                            Search results for: <BoldText>{term}</BoldText>
                        </TextSpan>
                    )}
                    <div className="flex flex-col self-center -ml-5
                    sm:hidden">
                        {searchedBreeds.map((breed) => (
                            <PetImage
                                key={breed.image.url}
                                url={breed.image.url}
                            >
                                <Link
                                    to={`/breed/${breed.id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button className="mt-20 z-20 absolute left-14 top-20 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {breed.name}
                                    </Button>
                                </Link>
                            </PetImage>
                        ))}
                    </div>
                    <SearchGrid images={searchedBreeds} />
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Search;
