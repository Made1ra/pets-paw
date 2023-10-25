import { useState, useEffect } from 'react';
import Container from '../components/Container';
import LeftSection from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import Burger from '../components/Burger/Burger';
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
import Grid from '../components/Grid/Grid';

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
        const fetchData = async () => {
            const breedResponse = await fetch(`https://api.thecatapi.com/v1/breeds`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const breedData = await breedResponse.json();
            setBreeds(breedData);

            const searchedBreed = breedData.filter((breed: { id: string, name: string, image: { url: string, id: string } }) => breed.name === breedValue);
            let breed_ids = '';
            if (searchedBreed.length !== 0) {
                breed_ids = searchedBreed[0].id;
            }

            const limit = value.replace(/^\D+/g, '');
            const imageResponse = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&breed_ids=${breed_ids}&limit=${limit}`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const imageData = await imageResponse.json();
            setSearchedBreeds(imageData);
        };

        fetchData();
    }, [API_KEY, value, breedValue]);

    return (
        <Container>
            <LeftSection isActive={isActive} />
            <RightSectionContainer>
                <LinkContainer>
                    <Burger isActive={isActive} />
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
                            className="dark:bg-opacity-10 dark:text-neutral-400"
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
                            className="dark:bg-opacity-10 dark:text-neutral-400"
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
                    <Grid
                        type="Breeds"
                        breedsImages={searchedBreeds}
                        galleryImages={[]}
                    />
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Breeds;
