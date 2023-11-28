'use client';

import { useSelector, useDispatch } from 'react-redux';
import { Breed, Log, addLog, removeBreed } from '@/app/lib/store';
import { formatDate } from '@/app/lib/utils/formatDate';
import Container from '@/app/ui/container';
import LeftSection from '@/app/ui/leftSection';
import RightSectionContainer from '@/app/ui/rightSectionContainer';
import LinkContainer from '@/app/ui/linkContainer';
import Burger from '@/app/ui/burger/burger';
import SearchBar from '@/app/ui/searchBar';
import Smiles from '@/app/ui/smiles';
import ActionsContainer from '@/app/ui/actionsContainer';
import NavigationContainer from '@/app/ui/navigationContainer';
import SmallLink from '@/app/ui/smallLink';
import LargeTextButton from '@/app/ui/largeTextButton';
import TextSpan from '@/app/ui/textSpan';
import PetImage from '@/app/ui/petImage';
import VotedGrid from '@/app/ui/grid/votedGrid';
import ActionMessage from '@/app/ui/actionMessage';

export default function Favourites() {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const logs = useSelector((state: { logs: { logs: Log[] } }) => state.logs.logs);
    const dispatch = useDispatch();

    const filteredBreeds = breeds.filter((breed) => breed.category === 'Favourites');

    function handleClick(reference_image_id: string) {
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
    }

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
                                            className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                            hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
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
