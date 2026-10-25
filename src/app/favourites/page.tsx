"use client";

import { Category, Action } from "@/lib/enums";
import { formatDate } from "@/lib/utils/format-date";
import { useBreedStore, useLogStore } from "@/lib/stores";
import {
  ActionMessage,
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

export default function Favourites() {
  const breeds = useBreedStore((state) => state.breeds);

  const logs = useLogStore((state) => state.logs);

  const removeBreed = useBreedStore((state) => state.removeBreed);

  const addLog = useLogStore((state) => state.addLog);

  const filteredBreeds = breeds.filter(
    (breed) => breed.category === Category.Favourites,
  );

  const handleClick = (referenceImageId: string) => {
    removeBreed(referenceImageId);

    addLog({
      reference_image_id: referenceImageId,
      dateOfEditing: formatDate(new Date()),
      category: Category.Favourites,
      action: Action.RemovedFrom,
    });
  };

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
              <div className="-ml-5 flex flex-col self-center sm:hidden">
                {filteredBreeds.map((breed) => (
                  <PetImage key={breed.reference_image_id} url={breed.url}>
                    <div
                      onClick={() => handleClick(breed.reference_image_id)}
                      className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                    />
                  </PetImage>
                ))}
              </div>
              <VotedGrid type={Category.Favourites} images={filteredBreeds} />
            </>
          )}
          {logs.length > 0 &&
            logs
              .toReversed()
              .map((log) => (
                <ActionMessage
                  id={log.id}
                  key={log.id}
                  reference_image_id={log.reference_image_id}
                  category={log.category}
                  dateOfEditing={log.dateOfEditing}
                  action={log.action}
                />
              ))}
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
