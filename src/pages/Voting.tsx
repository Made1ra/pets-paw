import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Log } from '../store';
import styled from 'styled-components';
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
import Controls from '../components/Controls';
import ActionMessage from '../components/ActionMessage';

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
    isActive: number;
};

function Voting({ isActive }: VotingProps) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const logs = useSelector((state: { logs: { logs: Log[] } }) => state.logs.logs);

    const [randomBreed, setRandomBreed] = useState<{ name: string, url: string, id: string }[]>([]);

    useEffect(() => {
        const getRandomBreed = async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=1`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setRandomBreed(data);
        };
        getRandomBreed();
    }, [API_KEY]);

    const handleLikeDislikeClick = async () => {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=1`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        const data = await response.json();
        setRandomBreed(data);
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
                        <LargeTextButton>VOTING</LargeTextButton>
                    </NavigationContainer>
                    <ImageContainer>
                        <Image $url={randomBreed.length > 0 ? `${randomBreed[0].url}` : ''} />
                        <ControlsContainer>
                            <Controls
                                reference_image_id={randomBreed.length > 0 ? randomBreed[0].id : ''}
                                url={randomBreed.length > 0 ? randomBreed[0].url : ''}
                                onLikeDislikeClick={() => handleLikeDislikeClick()}
                            />
                        </ControlsContainer>
                    </ImageContainer>
                    {
                        logs.length > 0 && logs.slice().reverse().map((log, i) => (
                            i < 4 && (
                                <ActionMessage
                                    key={i}
                                    reference_image_id={log.reference_image_id}
                                    category={log.category}
                                    dateOfEditing={log.dateOfEditing}
                                    action={log.action}
                                />
                            )
                        ))
                    }
                </ActionsContainer>
            </RightSectionContainer>
        </Container >
    );
}

export default Voting;
