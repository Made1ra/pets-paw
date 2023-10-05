import { useState, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breed, addBreed, addLog, removeBreed } from '../store';
import { formatDate } from '../utilities/formatDate';
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
import SmallFavouriteButton from '../components/SmallFavouriteButton';
import Modal from '../components/Modal';
import UpdateButton from '../components/UpdateButton';
import PetImage from '../components/PetImage';

type BreedsProps = {
    isActive: number;
};

function Gallery({ isActive }: BreedsProps) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const dispatch = useDispatch();

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
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleClick = async (reference_image_id: string) => {
        const filteredBreeds = breeds.find((breed) => breed.reference_image_id === reference_image_id);
        if (!filteredBreeds) {
            const response = await fetch(`https://api.thecatapi.com/v1/images/${reference_image_id}`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            dispatch(addBreed({ id: reference_image_id, dateOfEditing: formatDate(new Date()), category: 'Favourites', url: data.url }));
            dispatch(addLog({ id: reference_image_id, dateOfEditing: formatDate(new Date()), category: 'Favourites', action: 'added to' }));
        } else {
            dispatch(removeBreed({ id: reference_image_id, dateOfEditing: formatDate(new Date()), category: 'Favourites' }));
            dispatch(addLog({ id: reference_image_id, dateOfEditing: formatDate(new Date()), category: 'Favourites', action: 'removed from' }));
        }
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
                    <div className="w-full h-fit bg-stone-50 rounded-[20px]
                    dark:bg-white dark:bg-opacity-5">
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label className="w-28 text-neutral-400 text-[10px] font-medium font-jost leading-[18px] uppercase">ORDER</label>
                                <Select
                                    value={order}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)}
                                    className="bg-white dark:bg-stone-900 dark:text-white"
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
                                    className="bg-white dark:bg-stone-900 dark:text-white"
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
                                    className="bg-white dark:bg-stone-900 dark:text-white"
                                    width=""
                                >
                                    <Option>None</Option>
                                    {
                                        allBreeds.map((breed) => (
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
                                    className="bg-white dark:bg-stone-900 dark:text-white"
                                    width=""
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
                    {searchedBreeds.map((breed) => (
                        <PetImage
                            key={breed.url}
                            url={breed.url || ''}
                        >
                            <SmallFavouriteButton onClick={() => handleClick(breed.breeds[0].reference_image_id)} />
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
