'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/app/ui/container';
import LeftContent from '@/app/ui/leftSection';
import RightSectionContainer from '@/app/ui/rightSectionContainer';
import LinkContainer from '@/app/ui/linkContainer';
import TextSpan from '@/app/ui/textSpan';
import BoldText from '@/app/ui/boldText';
import Burger from '@/app/ui/burger/burger';
import SearchBar from '@/app/ui/searchBar';
import Smiles from '@/app/ui/smiles';
import ActionsContainer from '@/app/ui/actionsContainer';
import NavigationContainer from '@/app/ui/navigationContainer';
import SmallLink from '@/app/ui/smallLink';
import LargeTextButton from '@/app/ui/largeTextButton';
import PetImage from '@/app/ui/petImage';
import Button from '@/app/ui/button';
import SearchGrid from '@/app/ui/grid/searchGrid';

export default function Search() {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    const [searchedBreeds, setSearchedBreeds] = useState<{ name: string, image: { url: string }, id: string }[]>([]);
    const [term, setTerm] = useState('');

    async function searchBreeds(searchTerm: string) {
        const headers = new Headers();
        headers.append('x-api-key', API_KEY || '');
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, {
            headers: headers
        });

        const data = await response.json();
        setTerm(searchTerm);
        setSearchedBreeds(data);
    }

    return (
        <Container>
            <LeftContent isActive={4} />
            <RightSectionContainer>
                <LinkContainer>
                    <Burger isActive={4} />
                    <SearchBar onSearch={searchBreeds} />
                    <Smiles />
                </LinkContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton>SEARCH</LargeTextButton>
                    </NavigationContainer>
                    {searchedBreeds.length > 0 && (
                        <TextSpan className="mb-2">
                            Search results for: <BoldText>{term}</BoldText>
                        </TextSpan>
                    )}
                    <div className="flex flex-col self-center -ml-5
                    sm:hidden">
                        {searchedBreeds.map((breed) => (
                            <PetImage
                                key={breed.image.url}
                                url={breed.image.url}
                            >
                                <Link href={`/breeds/${breed.id}`}>
                                    <Button className="mt-20 z-20 absolute left-14 top-20 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {breed.name}
                                    </Button>
                                </Link>
                            </PetImage>
                        ))}
                    </div>
                    <SearchGrid images={searchedBreeds} />
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}
