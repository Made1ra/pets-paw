import { useSelector } from 'react-redux';
import { Breed } from '../store';
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
import TextSpan from '../components/TextSpan';
import PetImage from '../components/PetImage';

function Dislikes() {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const filteredBreeds = breeds.filter((breed) => breed.category === 'Dislikes');

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
                        <LargeTextButton>DISLIKES</LargeTextButton>
                    </NavigationContainer>
                    {filteredBreeds.length === 0 ? (
                        <TextSpan>No item found</TextSpan>
                    ) : (
                        filteredBreeds.map((breed) => (
                            <PetImage
                                key={breed.url}
                                url={breed.url || ''}
                            />
                        ))
                    )}
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Dislikes;
