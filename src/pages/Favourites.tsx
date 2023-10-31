import { useSelector } from 'react-redux';
import { Breed, Log } from '../store';
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
import VotedGrid from '../components/Grid/VotedGrid';
import ActionMessage from '../components/ActionMessage';

function Favourites() {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const logs = useSelector((state: { logs: { logs: Log[] } }) => state.logs.logs);

    const filteredBreeds = breeds.filter((breed) => breed.category === 'Favourites');

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
                        <LargeTextButton>FAVOURITES</LargeTextButton>
                    </NavigationContainer>
                    {filteredBreeds.length === 0 ? (
                        <TextSpan>No item found</TextSpan>
                    ) : (
                        <VotedGrid
                            type="Favourites"
                            images={filteredBreeds}
                        />
                    )}
                    {
                        logs.length > 0 && logs.slice().reverse().map((log, i) => (
                            <ActionMessage
                                key={i}
                                reference_image_id={log.reference_image_id}
                                category={log.category}
                                dateOfEditing={log.dateOfEditing}
                                action={log.action}
                            />
                        ))
                    }
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}

export default Favourites;
