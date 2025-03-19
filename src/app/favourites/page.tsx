"use client";

import { useSelector, useDispatch } from "react-redux";
import { Breed, Log, addLog, removeBreed } from "@/lib/store";
import { formatDate } from "@/lib/utils/format-date";
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
  const breeds = useSelector(
    (state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds,
  );
  const logs = useSelector(
    (state: { logs: { logs: Log[] } }) => state.logs.logs,
  );
  const dispatch = useDispatch();

  const filteredBreeds = breeds.filter(
    (breed) => breed.category === "Favourites",
  );

  function handleClick(reference_image_id: string) {
    dispatch(
      removeBreed({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category: "Favourites",
      }),
    );
    dispatch(
      addLog({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category: "Favourites",
        action: "removed from",
      }),
    );
  }

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
              .reverse()
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
