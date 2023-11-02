import { useSelector } from 'react-redux';
import { Breed } from '../store';
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
import TextSpan from '../components/TextSpan';
import PetImage from '../components/PetImage';
import VotedGrid from '../components/Grid/VotedGrid';

function Dislikes() {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const filteredBreeds = breeds.filter((breed) => breed.category === 'Dislikes');

    return (
        <Container>
            <LeftSection isActive={4} />
            <RightSectionContainer>
                <LinkContainer>
                    <Burger isActive={4} />
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
                        <>
                            <div className="flex flex-col self-center -ml-5
                            sm:hidden">
                                {filteredBreeds.map((breed) => (
                                    <PetImage
                                        key={breed.url}
                                        url={breed.url}
                                    />
                                ))}
                            </div>
                            <VotedGrid
                                type="Dislikes"
                                images={filteredBreeds}
                            />
                        </>
                    )}
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Dislikes;
