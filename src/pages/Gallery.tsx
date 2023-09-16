import { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import LeftSection from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import SearchBar from '../components/SearchBar';
import Smiles from '../components/Smiles';
import SmallLink from '../components/SmallLink';
import UploadButton from '../components/UploadButton';
import LargeTextButton from '../components/LargeTextButton';
import Modal from '../components/Modal';

const ActionsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 0.5rem;
    padding: 1rem;
    width: 42.5rem;
    height: 48.875rem;
    flex-shrink: 0;
    flex-direction: column;

    border-radius: 1.25rem;
    background: #FFF;
`;

const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
`;

type BreedsProps = {
    isActive: number;
};

function Gallery({ isActive }: BreedsProps) {
    // const API_KEY = import.meta.env.VITE_API_KEY;

    // const [searchedBreeds, setSearchedBreeds] = useState<{ name: string, image: { url: string }, reference_image_id: string }[]>([]);

    // const searchBreeds = async (searchTerm: string) => {
    //     const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, {
    //         headers: {
    //             'x-api-key': API_KEY
    //         }
    //     });

    //     const data = await response.json();
    //     setSearchedBreeds(data);
    // };
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => {
    //     setIsModalOpen(true);
    // };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                        <LargeTextButton>GALLERY</LargeTextButton>
                        <UploadButton />
                    </NavigationContainer>
                    {/* <button onClick={() => openModal()}>Open Modal</button> */}
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
