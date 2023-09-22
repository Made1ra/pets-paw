import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import LeftSection from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import SearchBar from '../components/SearchBar';
import Smiles from '../components/Smiles';
import ActionsContainer from '../components/ActionsContainer';
import NavigationContainer from '../components/NavigationContainer';
import SmallLink from '../components/SmallLink';
import LargeTextButton from '../components/LargeTextButton';
import Select from '../components/Select';
import Option from '../components/Option';
import SortRevertButton from '../components/SortRevertButton';
import SortButton from '../components/SortButton';
import PetImage from '../components/PetImage';
import Button from '../components/Button';

type BreedsProps = {
    isActive: number;
};

function Breeds({ isActive }: BreedsProps) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [breedValue, setBreedValue] = useState('All breeds');
    const [value, setValue] = useState('Limit: 10');
    const [breeds, setBreeds] = useState<{ id: string, name: string, image: { url: string, id: string } }[]>([]);
    const [searchedBreeds, setSearchedBreeds] = useState<{ id: string, url: string, breeds: { name: string, id: string }[] }[]>([]);

    const sortBreedsAlphabetically = (searchedBreeds: { id: string, url: string, breeds: { name: string, id: string }[] }[]) => {
        return searchedBreeds.slice().sort((a: { id: string, url: string, breeds: { name: string, id: string }[] }, b) => {
            const nameA = a.breeds[0].name.toLowerCase();
            const nameB = b.breeds[0].name.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }

    const sortBreedsReverseAlphabetically = (searchedBreeds: { id: string, url: string, breeds: { name: string, id: string }[] }[]) => {
        return searchedBreeds.slice().sort((a: { id: string, url: string, breeds: { name: string, id: string }[] }, b) => {
            const nameA = a.breeds[0].name.toLowerCase();
            const nameB = b.breeds[0].name.toLowerCase();
            return nameB.localeCompare(nameA);
        });
    }

    useEffect(() => {
        const getBreeds = async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setBreeds(data);
        };
        getBreeds();
    }, [API_KEY]);

    useEffect(() => {
        const getBreeds = async () => {
            const searchedBreed = breeds.filter((breed) => breed.name === breedValue);
            let breed_ids = '';
            if (searchedBreed.length !== 0) {
                breed_ids = searchedBreed[0].id;
            }

            const limit = value.replace(/^\D+/g, '');
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&breed_ids=${breed_ids}&limit=${limit}`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setSearchedBreeds(data);
        };
        getBreeds();
    }, [API_KEY, value, breedValue, breeds]);

    return (
        <Container>
            <LeftSection isActive={isActive} />
            <RightSectionContainer>
                <LinkContainer>
                    <SearchBar />
                    <Smiles />
                </LinkContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton>BREEDS</LargeTextButton>
                        <Select
                            value={breedValue}
                            onChange={(e) => setBreedValue(e.target.value)}
                            width="14.125rem"
                        >
                            <Option>All breeds</Option>
                            {
                                breeds.map((breed) => (
                                    <Option key={breed.name}>{breed.name}</Option>
                                ))
                            }
                        </Select>
                        <Select
                            value={value}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
                            width="6.3125rem"
                        >
                            <Option>Limit: 5</Option>
                            <Option>Limit: 10</Option>
                            <Option>Limit: 15</Option>
                            <Option>Limit: 20</Option>
                        </Select>
                        <SortRevertButton onClick={() => setSearchedBreeds(sortBreedsAlphabetically(searchedBreeds))}
                        />
                        <SortButton onClick={() => setSearchedBreeds(sortBreedsReverseAlphabetically(searchedBreeds))}
                        />
                    </NavigationContainer>
                    {searchedBreeds.map((breed) => (
                        <PetImage
                            key={breed.id}
                            url={breed.url || ''}
                        >
                            <Link
                                to={`/breed/${breed.breeds[0]?.id}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button className="mt-20 z-20 absolute left-2 top-4 w-[180px] h-[34px]">{breed.breeds[0]?.name}</Button>
                            </Link>
                        </PetImage>
                    ))}
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Breeds;
