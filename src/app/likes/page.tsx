'use client';

import { useSelector } from 'react-redux';
import { Breed } from '@/app/lib/store';
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

export default function Likes() {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const filteredBreeds = breeds.filter((breed) => breed.category === 'Likes');

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
                        <LargeTextButton>LIKES</LargeTextButton>
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
                                type="Likes"
                                images={filteredBreeds}
                            />
                        </>
                    )}
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}
