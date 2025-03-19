"use client";

import { useSelector } from "react-redux";
import { Breed } from "@/lib/store";
import Container from "@/components/container";
import LeftSection from "@/components/left-section";
import RightSectionContainer from "@/components/right-section-container";
import LinkContainer from "@/components/link-container";
import Burger from "@/components/burger/burger";
import SearchBar from "@/components/search-bar";
import Smiles from "@/components/smiles";
import ActionsContainer from "@/components/actions-container";
import NavigationContainer from "@/components/navigation-container";
import SmallLink from "@/components/small-link";
import LargeTextButton from "@/components/large-text-button";
import TextSpan from "@/components/text-span";
import PetImage from "@/components/pet-image";
import VotedGrid from "@/components/grid/voted-grid";

export default function Likes() {
  const breeds = useSelector(
    (state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds,
  );
  const filteredBreeds = breeds.filter((breed) => breed.category === "Likes");

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
              <div className="-ml-5 flex flex-col self-center sm:hidden">
                {filteredBreeds.map((breed) => (
                  <PetImage key={breed.url} url={breed.url} />
                ))}
              </div>
              <VotedGrid type="Likes" images={filteredBreeds} />
            </>
          )}
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
