"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAllBreedsQuery } from "@/hooks/query/use-all-breeds-query";
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
import Select from "@/components/select";
import Option from "@/components/option";
import SortRevertButton from "@/components/sort-revert-button";
import SortButton from "@/components/sort-button";
import PetImage from "@/components/pet-image";
import Button from "@/components/button";
import Grid from "@/components/grid/grid";
import { useImagesSearchQuery } from "@/hooks/query/use-images-search-query";

export default function Breeds() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(max-width: 640px)").matches,
  );
  const [breedValue, setBreedValue] = useState("All breeds");
  const [value, setValue] = useState("Limit: 10");
  const [searchedBreeds, setSearchedBreeds] = useState<
    { id: string; url: string; breeds: { name: string; id: string }[] }[]
  >([]);
  console.log(searchedBreeds);
  const { allBreeds = [] } = useAllBreedsQuery();

  const searchedBreed = allBreeds.filter((breed) => breed.name === breedValue);

  const limit = Number(value.replace(/^\D+/g, ""));

  const { searchedImages } = useImagesSearchQuery({
    breed_ids: searchedBreed[0]?.id,
    limit,
  });

  const pathname = usePathname();

  const handleChangeValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const handleChangeBreedValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setBreedValue(event.target.value);
  };

  const sortBreedsAlphabetically = () => {
    setSearchedBreeds(
      searchedBreeds.toSorted((a, b) => {
        const nameA = a.breeds[0].name.toLowerCase();
        const nameB = b.breeds[0].name.toLowerCase();

        return nameA.localeCompare(nameB);
      }),
    );
  };

  const sortBreedsReverseAlphabetically = () => {
    setSearchedBreeds(
      searchedBreeds.toSorted((a, b) => {
        const nameA = a.breeds[0].name.toLowerCase();
        const nameB = b.breeds[0].name.toLowerCase();

        return nameB.localeCompare(nameA);
      }),
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 640px");

      const handleScreenChange = (event: MediaQueryListEvent) => {
        setIsSmallScreen(event.matches);
      };

      mediaQuery.addEventListener("change", handleScreenChange);

      return () => {
        mediaQuery.removeEventListener("change", handleScreenChange);
      };
    }
  }, []);

  useEffect(() => {
    if (searchedImages) {
      setSearchedBreeds(searchedImages);
    }
  }, [searchedImages]);

  return (
    <Container>
      <LeftSection isActive={pathname === "/breeds" ? 2 : 4} />
      <RightSectionContainer>
        <LinkContainer>
          <Burger isActive={pathname === "/breeds" ? 2 : 4} />
          <SearchBar />
          <Smiles />
        </LinkContainer>
        <ActionsContainer>
          <NavigationContainer>
            <SmallLink />
            <LargeTextButton>BREEDS</LargeTextButton>
            {isSmallScreen ? (
              <div className="max-sm:flex max-sm:flex-col">
                <Select
                  value={breedValue}
                  onChange={handleChangeBreedValue}
                  width="14.125rem"
                  className="dark:bg-opacity-10 dark:text-neutral-400 max-sm:ml-0 max-sm:mt-4 max-sm:w-[18.4375rem]"
                >
                  <Option>All breeds</Option>
                  {allBreeds.map((breed) => (
                    <Option key={breed.name}>{breed.name}</Option>
                  ))}
                </Select>
                <div className="max-sm:mt-4 max-sm:flex max-sm:items-center">
                  <Select
                    value={value}
                    onChange={handleChangeValue}
                    width="6.3125rem"
                    className="dark:bg-opacity-10 dark:text-neutral-400 max-sm:ml-0 max-sm:w-[12.1875rem]"
                  >
                    <Option>Limit: 5</Option>
                    <Option>Limit: 10</Option>
                    <Option>Limit: 15</Option>
                    <Option>Limit: 20</Option>
                  </Select>
                  <SortRevertButton onClick={sortBreedsAlphabetically} />
                  <SortButton onClick={sortBreedsReverseAlphabetically} />
                </div>
              </div>
            ) : (
              <>
                <Select
                  value={breedValue}
                  onChange={handleChangeBreedValue}
                  width="14.125rem"
                  className="dark:bg-opacity-10 dark:text-neutral-400 max-sm:ml-0 max-sm:mt-4 max-sm:w-[18.4375rem]"
                >
                  <Option>All breeds</Option>
                  {allBreeds.map((breed) => (
                    <Option key={breed.name}>{breed.name}</Option>
                  ))}
                </Select>
                <Select
                  value={value}
                  onChange={handleChangeValue}
                  width="6.3125rem"
                  className="dark:bg-opacity-10 dark:text-neutral-400 max-sm:ml-0 max-sm:w-[12.1875rem]"
                >
                  <Option>Limit: 5</Option>
                  <Option>Limit: 10</Option>
                  <Option>Limit: 15</Option>
                  <Option>Limit: 20</Option>
                </Select>
                <SortRevertButton onClick={sortBreedsAlphabetically} />
                <SortButton onClick={sortBreedsReverseAlphabetically} />
              </>
            )}
          </NavigationContainer>
          <div className="-ml-5 flex flex-col self-center sm:hidden">
            {searchedBreeds.map((breed) => (
              <PetImage key={breed.url} url={breed.url}>
                <Link
                  href={searchedBreeds ? `/breeds/${breed.breeds[0].id}` : ""}
                >
                  <Button className="absolute left-14 top-20 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {breed.breeds[0].name}
                  </Button>
                </Link>
              </PetImage>
            ))}
          </div>
          <Grid
            type="Breeds"
            breedsImages={searchedBreeds}
            galleryImages={[]}
          />
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
