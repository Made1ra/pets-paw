import { useState, useEffect, ChangeEvent } from 'react';
import Container from '../components/Container';
import LeftSection from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import SearchBar from '../components/SearchBar';
import Smiles from '../components/Smiles';
import ActionsContainer from '../components/ActionsContainer';
import NavigationContainer from '../components/NavigationContainer';
import SmallLink from '../components/SmallLink';
import UploadButton from '../components/UploadButton';
import Select from '../components/Select';
import Option from '../components/Option';
import LargeTextButton from '../components/LargeTextButton';
import SmallFavoriteButton from '../components/SmallFavouriteButton';
import Modal from '../components/Modal';
import UpdateButton from '../components/UpdateButton';
import PetImage from '../components/PetImage';

type BreedsProps = {
    isActive: number;
};

function Gallery({ isActive }: BreedsProps) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const [order, setOrder] = useState('Random');
    const [type, setType] = useState('Static');
    const [breedValue, setBreedValue] = useState('None');
    const [value, setValue] = useState('5 items per page');
    const [breeds, setBreeds] = useState<{ id: string, name: string, image: { url: string, id: string } }[]>([]);
    const [searchedBreeds, setSearchedBreeds] = useState<{ id: string, url: string, breeds: { name: string, id: string }[] }[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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

            const baseUrl = 'https://api.thecatapi.com/v1/images/search?';
            const response = await fetch(`${baseUrl}breed_ids=${breed_ids}&order=${breedOrder}&mime_types=${mime_types}&limit=${limit}`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setSearchedBreeds(data);
        };
        getBreeds();
    }, [API_KEY, breeds, order, type, breedValue, value]);

    return (
        <Container className={`${isModalOpen ? 'bg-stone-900 bg-opacity-60' : ''}`}>
            <LeftSection isActive={isActive} />
            <RightSectionContainer>
                <LinkContainer>
                    <SearchBar />
                    <Smiles />
                </LinkContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton>GALLERY</LargeTextButton>
                        <UploadButton onClick={() => openModal()} />
                    </NavigationContainer>
                    <div className="w-full h-fit bg-stone-50 rounded-[20px]">
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label className="w-28 text-neutral-400 text-[10px] font-medium font-jost leading-[18px] uppercase">ORDER</label>
                                <Select
                                    value={order}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)}
                                    className="bg-white"
                                    width=""
                                >
                                    <Option>Random</Option>
                                    <Option>Desc</Option>
                                    <Option>Asc</Option>
                                </Select>
                            </div>
                            <div className="flex flex-col">
                                <label className="w-28 text-neutral-400 text-[10px] font-medium font-jost leading-[18px] uppercase">TYPE</label>
                                <Select
                                    value={type}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}
                                    className="bg-white"
                                    width=""
                                >
                                    <Option>All</Option>
                                    <Option>Static</Option>
                                    <Option>Animated</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="flex flex-row items-end justify-end">
                            <div className="flex flex-col">
                                <label className="w-28 text-neutral-400 text-[10px] font-medium font-jost leading-[18px] uppercase">BREED</label>
                                <Select
                                    value={breedValue}
                                    onChange={(e) => setBreedValue(e.target.value)}
                                    className="bg-white"
                                    width=""
                                >
                                    <Option>None</Option>
                                    {
                                        breeds.map((breed) => (
                                            <Option key={breed.name}>{breed.name}</Option>
                                        ))
                                    }
                                </Select>
                            </div>
                            <div className="flex flex-col">
                                <label className="w-28 text-neutral-400 text-[10px] font-medium font-jost leading-[18px] uppercase">LIMIT</label>
                                <Select
                                    value={value}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
                                    className="bg-white"
                                    width=""
                                >
                                    <Option>5 items per page</Option>
                                    <Option>10 items per page</Option>
                                    <Option>15 items per page</Option>
                                    <Option>20 items per page</Option>
                                </Select>
                            </div>
                            <UpdateButton onClick={() => undefined} />
                        </div>
                    </div>
                    {searchedBreeds.map((breed) => (
                        <PetImage
                            key={breed.id}
                            url={breed.url || ''}
                        // name={breed.breeds[i]?.name}
                        // id={breed.breeds[i]?.id}
                        >
                            <SmallFavoriteButton />
                        </PetImage>
                    ))}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => closeModal()}
                    >
                    </Modal>
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Gallery;
