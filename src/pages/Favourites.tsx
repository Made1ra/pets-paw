import { useSelector, useDispatch} from 'react-redux';
import { Breed, Log, addLog, removeBreed } from '../store';
import { formatDate } from '../utilities/formatDate';
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
import ActionMessage from '../components/ActionMessage';

function Favourites() {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const logs = useSelector((state: { logs: { logs: Log[] } }) => state.logs.logs);
    const dispatch = useDispatch();
    
    const filteredBreeds = breeds.filter((breed) => breed.category === 'Favourites');

    const handleClick = (reference_image_id: string) => {
        dispatch(removeBreed({
            reference_image_id,
            dateOfEditing: formatDate(new Date()),
            category: 'Favourites'
        }));
        dispatch(addLog({
            reference_image_id,
            dateOfEditing: formatDate(new Date()),
            category: 'Favourites',
            action: 'removed from'
        }));
    };

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
                        <>
                            <div className="flex flex-col self-center -ml-5
                            sm:hidden">
                                {filteredBreeds.map((breed) => (
                                    <PetImage
                                        key={breed.url}
                                        url={breed.url}
                                    >
                                        <div
                                            onClick={() => handleClick(breed.reference_image_id)}
                                            className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('../src/assets/fav-color-20.svg')]
                                            hover:bg-rose-400 hover:bg-[url('../src/assets/fav-full-white-20.svg')]"
                                        />
                                    </PetImage>
                                ))}
                            </div>
                            <VotedGrid
                                type="Favourites"
                                images={filteredBreeds}
                            />
                        </>
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
