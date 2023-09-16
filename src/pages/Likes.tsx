import { useSelector } from 'react-redux';
import { Breed } from '../store';
import styled from 'styled-components';
import Container from '../components/Container';
import LeftSection from '../components/LeftSection';
import RightSectionContainer from '../components/RightSectionContainer';
import LinkContainer from '../components/LinkContainer';
import SearchBar from '../components/SearchBar';
import Smiles from '../components/Smiles';
import SmallLink from '../components/SmallLink';
import LargeTextButton from '../components/LargeTextButton';
import TextSpan from '../components/TextSpan';
import PetImage from '../components/PetImage';

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
    align-items: center;
    flex-direction: row;
    margin-bottom: 1.5rem;
`;

function Likes() {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const filteredBreeds = breeds.filter((breed) => breed.category === 'Likes');

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
                        <LargeTextButton>LIKES</LargeTextButton>
                    </NavigationContainer>
                    {filteredBreeds.length === 0 ? (
                        <TextSpan>No item found</TextSpan>
                    ) : (
                        filteredBreeds.map((breed) => (
                            <PetImage
                                key={breed.url}
                                $url={breed.url || ''}
                            />
                        ))
                    )}
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Likes;
