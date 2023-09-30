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
            weight: {
                metric: string
            },
            life_span: string
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
            setSearchedBreed(data[0]);
        };
        getBreed();
    }, [API_KEY, id]);

    if (!searchedBreed) {
        return (
            <div>Loading...</div>
        );
    }
    
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
                        <div className="flex items-center justify-center w-[8.9375rem] h-10 ml-2 bg-red-100 rounded-[0.625rem] 
                        text-center text-rose-400 text-xl font-medium font-jost leading-[1.875rem] tracking-widest
                        hover:bg-rose-400 dark:bg-rose-400 dark:bg-opacity-20 dark:hover:bg-rose-400 
                        hover:text-white dark:text-rose-400 dark:hover:text-white">
                            BREEDS
                        </div>
                        <TextButton
                            isActive
                            className="ml-2"
                        >
                            {id}
                        </TextButton>
                    </NavigationContainer>
                    <ImageContainer>
                        <Image src={searchedBreed.url} />
                        <SelectedControls />
                    </ImageContainer>
                    <PetInfo
                        name={searchedBreed.breeds[0].name}
                        description={searchedBreed.breeds[0].description}
                        temperament={searchedBreed.breeds[0].temperament}
                        origin={searchedBreed.breeds[0].origin}
                        weight={searchedBreed.breeds[0].weight.metric}
                        lifeSpan={searchedBreed.breeds[0].life_span}
                    />
                </ActionsContainer>
            </RightSectionContainer>
        </Container >
    );
}

export default Breed;
