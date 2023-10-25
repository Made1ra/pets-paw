import { useState, useEffect, ChangeEvent } from 'react';
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
import UploadButton from '../components/UploadButton';
import Label from '../components/Label';
import Select from '../components/Select';
import Option from '../components/Option';
import LargeTextButton from '../components/LargeTextButton';
import UpdateButton from '../components/UpdateButton';
import Grid from '../components/Grid/Grid';
import Modal from '../components/Modal/Modal';

type BreedsProps = {
    isActive: number;
};

function Gallery({ isActive }: BreedsProps) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [shouldBeUpdated, setShouldBeUpdated] = useState(true);
    const [order, setOrder] = useState('Random');
    const [type, setType] = useState('Static');
    const [breedValue, setBreedValue] = useState('None');
    const [value, setValue] = useState('5 items per page');
    const [allBreeds, setAllBreeds] = useState<{ id: string, name: string, reference_image_id: string, image: { url: string, id: string } }[]>([]);
    const [searchedBreeds, setSearchedBreeds] = useState<{ url: string, breeds: [{ reference_image_id: string, id: string }] }[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const getBreeds = async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setAllBreeds(data);
        };
        getBreeds();
    }, [API_KEY]);

    useEffect(() => {
        const getBreeds = async () => {
            const searchedBreed = allBreeds.filter((breed) => breed.name === breedValue);
            let breed_ids = '';
            if (searchedBreed.length !== 0) {
                breed_ids = searchedBreed[0].id;
            }

            let breedOrder = ''
            if (order === 'Random') {
                breedOrder = 'RAND';
            } else if (order === 'Desc') {
                breedOrder = 'DESC';
            } else if (order === 'Asc') {
                breedOrder = 'ASC';
            }

            let mime_types = '';
            if (type === 'Static') {
                mime_types = 'jpg,png';
            } else if (type === 'Animated') {
                mime_types = 'gif';
            }

            const limit = value.match(/\d+/g);

            const baseUrl = 'https://api.thecatapi.com/v1/images/search?has_breeds=1&';
            const response = await fetch(`${baseUrl}breed_ids=${breed_ids}&order=${breedOrder}&mime_types=${mime_types}&limit=${limit}`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setSearchedBreeds(data);
        };

        if (allBreeds.length !== 0 && shouldBeUpdated) {
            getBreeds();
            setShouldBeUpdated(false);
        }
    }, [API_KEY, allBreeds, order, type, breedValue, value, shouldBeUpdated]);

    return (
        <>
            {isModalOpen && (
                <div className="absolute -left-5 top-0 w-screen h-screen z-20 bg-stone-900 bg-opacity-60" />
            )}
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
                            <LargeTextButton>GALLERY</LargeTextButton>
                            <UploadButton onClick={() => openModal()} />
                        </NavigationContainer>
                        <div className="flex w-full h-fit bg-stone-50 rounded-[1.25rem] p-4 flex-wrap
                        dark:bg-white dark:bg-opacity-5
                        lg:w-fit">
                            <div className="flex w-full">
                                <div className="flex flex-col w-1/2">
                                    <Label>ORDER</Label>
                                    <Select
                                        value={order}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)}
                                        className="bg-white dark:bg-stone-900 dark:text-white"
                                        width="18.125rem"
                                    >
                                        <Option>Random</Option>
                                        <Option>Desc</Option>
                                        <Option>Asc</Option>
                                    </Select>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <Label>TYPE</Label>
                                    <Select
                                        value={type}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}
                                        className="bg-white dark:bg-stone-900 dark:text-white"
                                        width="18.125rem"
                                    >
                                        <Option>All</Option>
                                        <Option>Static</Option>
                                        <Option>Animated</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex items-end justify-start w-full mt-4">
                                <div className="flex flex-col w-1/2">
                                    <Label>BREED</Label>
                                    <Select
                                        value={breedValue}
                                        onChange={(e) => setBreedValue(e.target.value)}
                                        className="bg-white dark:bg-stone-900 dark:text-white"
                                        width="18.125rem"
                                    >
                                        <Option>None</Option>
                                        {allBreeds.map((breed) => (
                                            <Option key={breed.name}>{breed.name}</Option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="flex items-end w-1/2">
                                    <div className="flex flex-col w-5/6">
                                        <Label>LIMIT</Label>
                                        <Select
                                            value={value}
                                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
                                            className="bg-white dark:bg-stone-900 dark:text-white"
                                            width="15rem"
                                        >
                                            <Option>5 items per page</Option>
                                            <Option>10 items per page</Option>
                                            <Option>15 items per page</Option>
                                            <Option>20 items per page</Option>
                                        </Select>
                                    </div>
                                    <UpdateButton onClick={() => setShouldBeUpdated(true)} />
                                </div>
                            </div>
                        </div>
                        <Grid
                            type="Gallery"
                            breedsImages={[]}
                            galleryImages={searchedBreeds}
                        />
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => closeModal()}
                        />
                    </ActionsContainer>
                </RightSectionContainer>
            </Container>
        </>
    );
}

export default Gallery;
