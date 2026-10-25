"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useBreedImagesQuery, useBreedsQuery } from "@/hooks";
import {
  ActionsContainer,
  Burger,
  Button,
  Container,
  Grid,
  LargeTextButton,
  LeftSection,
  LinkContainer,
  NavigationContainer,
  Option,
  PetImage,
  RightSectionContainer,
  SearchBar,
  Select,
  Smiles,
  SmallLink,
  SortButton,
  SortRevertButton,
} from "@/components";

type BreedImage = {
  id: string;
  url: string;
  breeds?: { id: string; name: string }[];
};

export default function Breeds() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(max-width: 640px)").matches,
  );
  const [breedValue, setBreedValue] = useState("All breeds");
  const [value, setValue] = useState("Limit: 10");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null,
  );

  const breedsQuery = useBreedsQuery();
  const breeds = breedsQuery.data ?? [];
  const selectedBreedId =
    breeds.find((breed) => breed.name === breedValue)?.id ?? "";
  const imagesQuery = useBreedImagesQuery(
    selectedBreedId,
    value,
    breedsQuery.isSuccess,
  );
  const searchedBreeds = (imagesQuery.data ?? []).filter(
    (image): image is BreedImage & { breeds: { id: string; name: string }[] } =>
      Boolean(image.breeds?.length),
  );
  const displayedBreeds = sortDirection
    ? searchedBreeds.toSorted((a, b) => {
        const comparison = (a.breeds?.[0]?.name ?? "").localeCompare(
          b.breeds?.[0]?.name ?? "",
        );

        return sortDirection === "asc" ? comparison : -comparison;
      })
    : searchedBreeds;

  const pathname = usePathname();

  const handleChangeValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const handleChangeBreedValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setBreedValue(event.target.value);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 640px)");

      const handleScreenChange = (event: MediaQueryListEvent) => {
        setIsSmallScreen(event.matches);
      };

      mediaQuery.addEventListener("change", handleScreenChange);

      return () => {
        mediaQuery.removeEventListener("change", handleScreenChange);
      };
    }
  }, []);

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
                  {breeds.map((breed) => (
                    <Option key={breed.id}>{breed.name}</Option>
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
                  <SortRevertButton onClick={() => setSortDirection("asc")} />
                  <SortButton onClick={() => setSortDirection("desc")} />
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
                  {breeds.map((breed) => (
                    <Option key={breed.id}>{breed.name}</Option>
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
                <SortRevertButton onClick={() => setSortDirection("asc")} />
                <SortButton onClick={() => setSortDirection("desc")} />
              </>
            )}
          </NavigationContainer>
          <div className="-ml-5 flex flex-col self-center sm:hidden">
            {displayedBreeds.map((breed) => (
              <PetImage key={breed.id} url={breed.url}>
                <Link href={`/breeds/${breed.breeds[0]?.id}`}>
                  <Button className="absolute left-14 top-20 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {breed.breeds[0]?.name}
                  </Button>
                </Link>
              </PetImage>
            ))}
          </div>
          <Grid
            type="Breeds"
            breedsImages={displayedBreeds}
            galleryImages={[]}
          />
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
