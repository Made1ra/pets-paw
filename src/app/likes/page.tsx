"use client";

import { Category } from "@/lib/enums";
import { useBreedStore } from "@/lib/stores/breed";
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

export default function Likes() {
  const breeds = useBreedStore((state) => state.breeds);

  const filteredBreeds = breeds.filter(
    (breed) => breed.category === Category.Likes,
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
            <LargeTextButton>LIKES</LargeTextButton>
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
              <VotedGrid type={Category.Likes} images={filteredBreeds} />
            </>
          )}
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
