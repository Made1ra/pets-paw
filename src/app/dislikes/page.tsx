'use client';

import { useSelector } from 'react-redux';
import { Breed } from '@/app/lib/store';
import Container from '@/app/ui/container';
import LeftSection from '@/app/ui/left-section';
import RightSectionContainer from '@/app/ui/right-section-container';
import LinkContainer from '@/app/ui/link-container';
import Burger from '@/app/ui/burger/burger';
import SearchBar from '@/app/ui/search-bar';
import Smiles from '@/app/ui/smiles';
import ActionsContainer from '@/app/ui/actions-container';
import NavigationContainer from '@/app/ui/navigation-container';
import SmallLink from '@/app/ui/small-link';
import LargeTextButton from '@/app/ui/large-text-button';
import TextSpan from '@/app/ui/text-span';
import PetImage from '@/app/ui/pet-image';
import VotedGrid from '@/app/ui/grid/voted-grid';

export default function Dislikes() {
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
