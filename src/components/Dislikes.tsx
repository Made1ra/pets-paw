import { useSelector } from 'react-redux';
import { Breed } from '../store';
import styled from 'styled-components';
import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';
import LinkContainer from './LinkContainer';
import SearchBar from './SearchBar';
import Smiles from './Smiles';
import SmallLink from './SmallLink';
import LargeTextButton from './LargeTextButton';
import TextSpan from './TextSpan';
import PetImage from './PetImage';

const RightContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

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

function Dislikes() {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const filteredBreeds = breeds.filter((breed) => breed.category === 'Dislikes');

    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome $isActive={4} />
            </LeftContent>
            <RightContentContainer>
                <LinkContainer>
                    <SearchBar />
                    <Smiles />
                </LinkContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton $isActive={true}>DISLIKES</LargeTextButton>
                    </NavigationContainer>
                    {filteredBreeds.length === 0 ? (
                        <TextSpan>No item found</TextSpan>
                    ) : (
                        filteredBreeds.map((breed, i) => (
                            <PetImage
                                key={i}
                                $url={breed.url || ''}
                            />
                        ))
                    )}
                </ActionsContainer>
            </RightContentContainer>
        </Container>
    );
}

export default Dislikes;
