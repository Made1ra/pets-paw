"use client";

import { useState } from "react";
import Link from "next/link";

import { useBreedSearchQuery, type BreedSearchResult } from "@/hooks";
import {
  ActionsContainer,
  BoldText,
  Burger,
  Button,
  Container,
  LargeTextButton,
  LeftSection as LeftContent,
  LinkContainer,
  NavigationContainer,
  PetImage,
  RightSectionContainer,
  SearchBar,
  SearchGrid,
  Smiles,
  SmallLink,
  TextSpan,
} from "@/components";

export default function Search() {
  const [term, setTerm] = useState("");

  const breedsQuery = useBreedSearchQuery(term);
  const searchedBreeds = (breedsQuery.data ?? []).filter(
    (breed): breed is BreedSearchResult & { image: { url: string } } =>
      Boolean(breed.image?.url),
  );

  const searchBreeds = (searchTerm: string) => {
    setTerm(searchTerm.trim());
  };

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
          <div className="-ml-5 flex flex-col self-center sm:hidden">
            {searchedBreeds.map((breed) => (
              <PetImage key={breed.id} url={breed.image.url}>
                <Link href={`/breeds/${breed.id}`}>
                  <Button className="absolute left-14 top-20 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
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
