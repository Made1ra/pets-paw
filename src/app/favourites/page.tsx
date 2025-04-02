"use client";

import { formatDate } from "@/lib/utils/format-date";
import { useBreedStore } from "@/lib/stores/breed";
import { useLogStore } from "@/lib/stores/log";
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
import ActionMessage from "@/components/action-message";

export default function Favourites() {
  const breeds = useBreedStore((state) => state.breeds);

  const logs = useLogStore((state) => state.logs);

  const removeBreed = useBreedStore((state) => state.removeBreed);

  const addLog = useLogStore((state) => state.addLog);

  const filteredBreeds = breeds.filter(
    (breed) => breed.category === "Favourites",
  );

  const handleClick = (reference_image_id: string) => {
    removeBreed(reference_image_id);

    addLog({
      reference_image_id,
      dateOfEditing: formatDate(new Date()),
      category: "Favourites",
      action: "removed from",
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
          {!!filteredBreeds.length ? (
            <TextSpan>No item found</TextSpan>
          ) : (
            <>
              <div className="-ml-5 flex flex-col self-center sm:hidden">
                {filteredBreeds.map((breed) => (
                  <PetImage key={breed.url} url={breed.url}>
                    <div
                      onClick={() => handleClick(breed.reference_image_id)}
                      className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                    />
                  </PetImage>
                ))}
              </div>
              <VotedGrid type="Favourites" images={filteredBreeds} />
            </>
          )}
          {logs.length > 0 &&
            logs
              .slice()
              .toReversed()
              .map((log, i) => (
                <ActionMessage
                  key={i}
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
