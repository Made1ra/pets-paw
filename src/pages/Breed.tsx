import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Container from '../components/Container';
import LeftSection from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import SearchBar from '../components/SearchBar';
import Smiles from '../components/Smiles';
import SmallLink from '../components/SmallLink';
import ActionsContainer from '../components/ActionsContainer';
import NavigationContainer from '../components/NavigationContainer';
import Loader from '../components/Loader';
import Image from '../components/Image';
import PetInfo from '../components/PetInfo';
import 'swiper/css';
import 'swiper/css/pagination';

function Breed() {
    const { id } = useParams();

    const API_KEY = import.meta.env.VITE_API_KEY;

    const [searchedBreeds, setSearchedBreeds] = useState<{
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
    }[]>([]);

    useEffect(() => {
        const getBreed = async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&breed_ids=${id}&limit=5`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setSearchedBreeds(data);
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
                        <div className="flex items-center justify-center w-[8.9375rem] h-10 ml-2 bg-red-100 rounded-[0.625rem] 
                        text-center text-rose-400 text-xl font-medium font-jost leading-[1.875rem] tracking-widest
                        hover:bg-rose-400 dark:bg-rose-400 dark:bg-opacity-20 dark:hover:bg-rose-400 
                        hover:text-white dark:text-rose-400 dark:hover:text-white">
                            BREEDS
                        </div>
                        <div className="flex items-center justify-center text-center w-fit h-10 bg-rose-400 rounded-[0.625rem] p-4 ml-2 uppercase text-white hover:bg-red-100 hover:text-rose-400">
                            <div className="w-fit text-center text-xl font-medium font-jost leading-[1.875rem] tracking-widest">
                                {id}
                            </div>
                        </div>
                    </NavigationContainer>
                    {!searchedBreeds.length ? (
                        <Loader />
                    ) : (
                        <>
                            <Swiper
                                pagination={{
                                    clickable: true,
                                    type: "bullets",
                                }}
                                grabCursor
                                modules={[Pagination]}
                            >
                                {searchedBreeds.slice(0, 5).map((breed) => (
                                    <SwiperSlide key={breed.url}>
                                        <Image
                                            src={breed.url}
                                            alt={breed.breeds[0].name}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <PetInfo
                                name={searchedBreeds[0].breeds[0].name}
                                description={searchedBreeds[0].breeds[0].description}
                                temperament={searchedBreeds[0].breeds[0].temperament}
                                origin={searchedBreeds[0].breeds[0].origin}
                                weight={searchedBreeds[0].breeds[0].weight.metric}
                                lifeSpan={searchedBreeds[0].breeds[0].life_span}
                            />
                        </>
                    )}
                </ActionsContainer>
            </RightSectionContainer>
        </Container >
    );
}

export default Breed;
