"use client";

import { Category } from "@/lib/enums";
import { useBreedStore } from "@/lib/stores";
import {
  ActionsContainer,
  Burger,
  Container,
  LargeTextButton,
  LeftSection,
  LinkContainer,
  NavigationContainer,
  PetImage,
  RightSectionContainer,
  SearchBar,
  Smiles,
  SmallLink,
  TextSpan,
  VotedGrid,
} from "@/components";

export default function Dislikes() {
  const breeds = useBreedStore((state) => state.breeds);

  const filteredBreeds = breeds.filter(
    (breed) => breed.category === Category.Dislikes,
  );

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
              <div className="-ml-5 flex flex-col self-center sm:hidden">
                {filteredBreeds.map((breed) => (
                  <PetImage key={breed.reference_image_id} url={breed.url} />
                ))}
              </div>
              <VotedGrid type={Category.Dislikes} images={filteredBreeds} />
            </>
          )}
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
