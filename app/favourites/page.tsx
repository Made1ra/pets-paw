"use client";

import { useSelector, useDispatch } from "react-redux";
import { Breed, Log, addLog, removeBreed } from "@/app/lib/store";
import { formatDate } from "@/app/lib/utils/format-date";
import Container from "@/app/ui/container";
import LeftSection from "@/app/ui/left-section";
import RightSectionContainer from "@/app/ui/right-section-container";
import LinkContainer from "@/app/ui/link-container";
import Burger from "@/app/ui/burger/burger";
import SearchBar from "@/app/ui/search-bar";
import Smiles from "@/app/ui/smiles";
import ActionsContainer from "@/app/ui/actions-container";
import NavigationContainer from "@/app/ui/navigation-container";
import SmallLink from "@/app/ui/small-link";
import LargeTextButton from "@/app/ui/large-text-button";
import TextSpan from "@/app/ui/text-span";
import PetImage from "@/app/ui/pet-image";
import VotedGrid from "@/app/ui/grid/voted-grid";
import ActionMessage from "@/app/ui/action-message";

export default function Favourites() {
  const breeds = useSelector(
    (state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds
  );
  const logs = useSelector(
    (state: { logs: { logs: Log[] } }) => state.logs.logs
  );
  const dispatch = useDispatch();

  const filteredBreeds = breeds.filter(
    (breed) => breed.category === "Favourites"
  );

  function handleClick(reference_image_id: string) {
    dispatch(
      removeBreed({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category: "Favourites",
      })
    );
    dispatch(
      addLog({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category: "Favourites",
        action: "removed from",
      })
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
              <div
                className="flex flex-col self-center -ml-5
                            sm:hidden"
              >
                {filteredBreeds.map((breed) => (
                  <PetImage key={breed.url} url={breed.url}>
                    <div
                      onClick={() => handleClick(breed.reference_image_id)}
                      className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                            hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
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
