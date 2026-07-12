"use client";

import { useState } from "react";
import Link from "next/link";

import { useBreedsBySearchTermQuery } from "@/hooks/query/use-breeds-by-search-term-query";
import Container from "@/components/container";
import LeftContent from "@/components/left-section";
import RightSectionContainer from "@/components/right-section-container";
import LinkContainer from "@/components/link-container";
import TextSpan from "@/components/text-span";
import BoldText from "@/components/bold-text";
import Burger from "@/components/burger/burger";
import SearchBar from "@/components/search-bar";
import Smiles from "@/components/smiles";
import ActionsContainer from "@/components/actions-container";
import NavigationContainer from "@/components/navigation-container";
import SmallLink from "@/components/small-link";
import LargeTextButton from "@/components/large-text-button";
import PetImage from "@/components/pet-image";
import Button from "@/components/button";
import SearchGrid from "@/components/grid/search-grid";

export default function Search() {
  const [term, setTerm] = useState("");

  const { searchedBreeds } = useBreedsBySearchTermQuery(term);

  const searchBreeds = (searchTerm: string) => {
    setTerm(searchTerm);
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
          {searchedBreeds && searchedBreeds.length > 0 && (
            <TextSpan className="mb-2">
              Search results for: <BoldText>{term}</BoldText>
            </TextSpan>
          )}
          <div className="-ml-5 flex flex-col self-center sm:hidden">
            {searchedBreeds &&
              searchedBreeds.map(
                (breed) =>
                  breed.image?.url && (
                    <PetImage key={breed.image.url} url={breed.image.url}>
                      <Link href={`/breeds/${breed.id}`}>
                        <Button className="absolute left-14 top-20 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                          {breed.name}
                        </Button>
                      </Link>
                    </PetImage>
                  ),
              )}
          </div>
          <SearchGrid images={searchedBreeds ?? []} />
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
