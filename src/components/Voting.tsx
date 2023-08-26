import { useSelector } from 'react-redux';
import { Log } from '../store';
import { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';
import SearchBar from './SearchBar';
import Link from './Link';
import SmallLink from './SmallLink';
import LargeTextButton from './LargeTextButton';
import Controls from './Controls';
import ActionMessage from './ActionMessage';

const RightContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 1rem;
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
    flex-direction: row;
    margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Image = styled.div<{ $url: string }>`
    width: 40rem;
    height: 22.5rem;
    flex-shrink: 0;

    border-radius: 1.25rem;
    background: url(${props => props.$url}), lightgray 50% no-repeat;
    background-size: cover;
`;

const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: 1rem;
    margin-top: -3.5rem;
`;

type VotingProps = {
    $isActive: number;
};

function Voting({ $isActive }: VotingProps) {
    const logs = useSelector((state: { logs: { logs: Log[] } }) => state.logs.logs);

    const API_KEY = import.meta.env.VITE_API_KEY;
    const [searchedBreeds, setSearchedBreeds] = useState<{ name: string, image: { url: string }, reference_image_id: string }[]>([]);

    const searchBreeds = async (searchTerm: string) => {
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        const data = await response.json();
        setSearchedBreeds(data);
    };

    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome $isActive={$isActive} />
            </LeftContent>
            <RightContentContainer>
                <SearchBarContainer>
                    <SearchBar onSearch={searchBreeds} />
                    <Link imageTitle="like" />
                    <Link imageTitle="fav" />
                    <Link imageTitle="dislike" />
                </SearchBarContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton $isActive={true}>VOTING</LargeTextButton>
                    </NavigationContainer>
                    <ImageContainer>
                        <Image $url={searchedBreeds.length > 0 ? `${searchedBreeds[0].image.url}` : ''} />
                        <ControlsContainer>
                            <Controls reference_image_id={searchedBreeds.length > 0 ? searchedBreeds[0].reference_image_id : ''} />
                        </ControlsContainer>
                    </ImageContainer>
                    {
                        logs.length > 0 && logs.slice().reverse().map((log, i) => (
                            // i < 4 && (
                            <ActionMessage
                                key={i}
                                reference_image_id={log.reference_image_id}
                                category={log.category}
                                dateOfEditing={log.dateOfEditing}
                                action={log.action}
                            />
                            // )
                        ))
                    }
                </ActionsContainer>
            </RightContentContainer>
        </Container>
    );
}

export default Voting;
