import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Log } from '../store';
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
import ImageContainer from '../components/ImageContainer';
import Image from '../components/Image';
import ControlsContainer from '../components/ControlsContainer';
import Controls from '../components/Controls';
import ActionMessage from '../components/ActionMessage';

type VotingProps = {
    isActive: number;
};

function Voting({ isActive }: VotingProps) {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const logs = useSelector((state: { logs: { logs: Log[] } }) => state.logs.logs);

    const [randomImage, setRandomImage] = useState<{ name: string, url: string, id: string }[]>([]);

    useEffect(() => {
        const getRandomImage = async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=1`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });
            const data = await response.json();
            setRandomImage(data);
        };
        getRandomImage();
    }, [API_KEY]);

    const handleLikeDislikeClick = async () => {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=1`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        const data = await response.json();
        setRandomImage(data);
    };
    console.log(logs[0]);
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
                        <Image src={randomImage.length > 0 ? `${randomImage[0].url}` : ''} />
                        <ControlsContainer>
                            <Controls
                                reference_image_id={randomImage.length > 0 ? randomImage[0].id : ''}
                                url={randomImage.length > 0 ? randomImage[0].url : ''}
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
