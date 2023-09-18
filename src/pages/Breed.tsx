import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import LeftSection from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import SearchBar from '../components/SearchBar';
import Smiles from '../components/Smiles';
import SmallLink from '../components/SmallLink';
import ActionsContainer from '../components/ActionsContainer';
import NavigationContainer from '../components/NavigationContainer';
import TextButton from '../components/TextButton';
import ImageContainer from '../components/ImageContainer';
import Image from '../components/Image';
import SelectedControls from '../components/SelectedControls';
import PetInfo from '../components/PetInfo';

function Breed() {
    const { id } = useParams();

    const API_KEY = import.meta.env.VITE_API_KEY;

    const [searchedBreed, setSearchedBreed] = useState<{
        id: string, url: string, breeds: {
            id: string,
            name: string,
            description: string,
            temperament: string,
            origin: string,
            weight: string,
            lifeSpan: string
        }[]
    }>();

    useEffect(() => {
        const getBreed = async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&breed_ids=${id}&limit=1`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setSearchedBreed(data);
        };
        getBreed();

    }, [API_KEY, id]);
    console.log(searchedBreed);
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
                        <TextButton
                            isActive
                            className="ml-2"
                        >
                            {searchedBreed?.breeds && searchedBreed.breeds[0]?.name}
                        </TextButton>
                        <TextButton
                            isActive
                            className="ml-2"
                        >
                            {id}
                        </TextButton>
                    </NavigationContainer>
                    <ImageContainer>
                        <Image src={searchedBreed?.url || ''} />
                        <SelectedControls />
                    </ImageContainer>
                    <PetInfo
                        name={searchedBreed?.breeds[0].name || ''}
                        description={searchedBreed?.breeds[0].description || ''}
                        temperament={searchedBreed?.breeds[0].temperament || ''}
                        origin={searchedBreed?.breeds[0].origin || ''}
                        weight={searchedBreed?.breeds[0].weight || ''}
                        lifeSpan={searchedBreed?.breeds[0].lifeSpan || ''}
                    />
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Breed;
