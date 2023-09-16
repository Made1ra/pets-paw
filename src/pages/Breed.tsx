import { useState, useEffect } from 'react';
import Container from '../components/Container';
import LeftSection from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import SearchBar from '../components/SearchBar';
import Smiles from '../components/Smiles';
import SmallLink from '../components/SmallLink';
import LargeTextButton from '../components/LargeTextButton';
import ActionsContainer from '../components/ActionsContainer';
import NavigationContainer from '../components/NavigationContainer';
import TextButton from '../components/TextButton';
import ImageContainer from '../components/ImageContainer';
import Image from '../components/Image';
import SelectedControls from '../components/SelectedControls';

type BreedProps = {
    id: string;
};

function Breed({ id }: BreedProps) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [searchedBreed, setSearchedBreed] = useState<{ id: string, url: string, breeds: { name: string, id: string }[] }>();

    useEffect(() => {
        const getBreed = async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&breed_ids=${id}&limit=5`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setSearchedBreed(data);
        };
        getBreed();

    }, [API_KEY, id]);

    return (
        <Container>
            <LeftSection isActive={4} />
            <RightSectionContainer>
                <LinkContainer>
                    <SearchBar />
                    <Smiles />
                </LinkContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton></LargeTextButton>
                        <TextButton isActive></TextButton>
                    </NavigationContainer>
                    <ImageContainer>
                        <Image src={searchedBreed?.url || ''} />
                        <SelectedControls />
                    </ImageContainer>
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Breed;
