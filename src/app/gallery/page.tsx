"use client";

import { useState, type ChangeEvent } from "react";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { fetcher } from "@/lib/fetcher";
import { Category, Action } from "@/lib/enums";
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
import UploadButton from "@/components/upload-button";
import Label from "@/components/label";
import Select from "@/components/select";
import Option from "@/components/option";
import LargeTextButton from "@/components/large-text-button";
import UpdateButton from "@/components/update-button";
import PetImage from "@/components/pet-image";
import SmallFavouriteButton from "@/components/small-favourite-button";
import Grid from "@/components/grid/grid";
import Modal from "@/components/modal/modal";

type GalleryFilters = {
  order: string;
  type: string;
  breedValue: string;
  value: string;
};

type GalleryImage = {
  id: string;
  url: string;
  breeds?: { reference_image_id: string; id: string; name?: string }[];
};

export default function Gallery() {
  const breeds = useBreedStore((state) => state.breeds);

  const addBreed = useBreedStore((state) => state.addBreed);

  const removeBreed = useBreedStore((state) => state.removeBreed);

  const addLog = useLogStore((state) => state.addLog);

  const [order, setOrder] = useState("Random");
  const [type, setType] = useState("Static");
  const [breedValue, setBreedValue] = useState("None");
  const [value, setValue] = useState("5 items per page");
  const [appliedFilters, setAppliedFilters] = useState<GalleryFilters>({
    order: "Random",
    type: "Static",
    breedValue: "None",
    value: "5 items per page",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breedsQuery = useQuery({
    queryKey: ["breeds"],
    queryFn: ({ signal }) =>
      fetcher<{ id: string; name: string }[]>("/breeds", { signal }),
  });
  const allBreeds = breedsQuery.data ?? [];
  const selectedBreedId =
    allBreeds.find((breed) => breed.name === appliedFilters.breedValue)?.id ??
    "";
  const imagesQuery = useQuery({
    queryKey: ["gallery-images", appliedFilters, selectedBreedId],
    queryFn: ({ signal }) => {
      const breedOrder =
        appliedFilters.order === "Random"
          ? "RAND"
          : appliedFilters.order.toUpperCase();
      let mimeTypes = "";
      if (appliedFilters.type === "Static") {
        mimeTypes = "jpg,png";
      } else if (appliedFilters.type === "Animated") {
        mimeTypes = "gif";
      }

      const params = new URLSearchParams({
        has_breeds: "1",
        breed_ids: selectedBreedId,
        order: breedOrder,
        mime_types: mimeTypes,
        limit: appliedFilters.value.match(/\d+/)?.[0] ?? "5",
      });
      return fetcher<GalleryImage[]>(`/images/search?${params}`, { signal });
    },
    enabled: breedsQuery.isSuccess,
  });
  const searchedBreeds = (imagesQuery.data ?? []).map((image) => ({
    ...image,
    breeds: image.breeds ?? [],
  }));

  const pathname = usePathname();

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleUploadButtonClick = () => {
    const nextFilters = { order, type, breedValue, value };
    const unchanged =
      order === appliedFilters.order &&
      type === appliedFilters.type &&
      breedValue === appliedFilters.breedValue &&
      value === appliedFilters.value;
    setAppliedFilters(nextFilters);
    if (unchanged) {
      void imagesQuery.refetch();
    }
  };

  const handleBreedValueChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setBreedValue(event.target.value);
  };

  const handleOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value);
  };

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleValueChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const handleClick = (id: string, url: string) => {
    const filteredBreeds = breeds.find((breed) => breed.url === url);
    if (!filteredBreeds) {
      addBreed({
        reference_image_id: id,
        dateOfEditing: formatDate(new Date()),
        category: Category.Favourites,
        url,
      });

      addLog({
        reference_image_id: id,
        dateOfEditing: formatDate(new Date()),
        category: Category.Favourites,
        action: Action.AddedTo,
      });
    } else {
      removeBreed(filteredBreeds.reference_image_id);

      addLog({
        reference_image_id: filteredBreeds.reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category: Category.Favourites,
        action: Action.RemovedFrom,
      });
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="absolute -left-5 top-0 z-20 h-screen w-screen bg-stone-900 bg-opacity-60" />
      )}
      <Container>
        <LeftSection isActive={pathname === "/gallery" ? 3 : 4} />
        <RightSectionContainer>
          <LinkContainer>
            <Burger isActive={pathname === "/gallery" ? 3 : 4} />
            <SearchBar />
            <Smiles />
          </LinkContainer>
          <ActionsContainer>
            <NavigationContainer>
              <SmallLink />
              <LargeTextButton>GALLERY</LargeTextButton>
              <UploadButton onClick={openModal} />
            </NavigationContainer>
            <div className="flex h-fit w-[18.4375rem] flex-wrap rounded-[1.25rem] bg-stone-50 py-4 pr-4 dark:bg-white dark:bg-opacity-5 max-sm:w-[18.5rem] sm:w-[47rem] lg:w-[42.5rem]">
              <div className="flex w-full max-sm:flex-col max-sm:items-center max-sm:justify-center">
                <div className="flex w-1/2 flex-col max-sm:w-[17.1875rem]">
                  <Label>ORDER</Label>
                  <Select
                    value={order}
                    onChange={handleOrderChange}
                    className="bg-white dark:bg-stone-900 dark:text-white"
                    width="18.125rem"
                  >
                    <Option>Random</Option>
                    <Option>Desc</Option>
                    <Option>Asc</Option>
                  </Select>
                </div>
                <div className="flex w-1/2 flex-col max-sm:mt-4 max-sm:w-[17.1875rem]">
                  <Label>TYPE</Label>
                  <Select
                    value={type}
                    onChange={handleTypeChange}
                    className="bg-white dark:bg-stone-900 dark:text-white"
                    width="18.125rem"
                  >
                    <Option>All</Option>
                    <Option>Static</Option>
                    <Option>Animated</Option>
                  </Select>
                </div>
              </div>
              <div className="mt-4 flex w-full items-end justify-start max-sm:flex-col max-sm:items-center max-sm:justify-center">
                <div className="flex w-1/2 flex-col max-sm:w-[17.1875rem]">
                  <Label>BREED</Label>
                  <Select
                    value={breedValue}
                    onChange={handleBreedValueChange}
                    className="bg-white dark:bg-stone-900 dark:text-white"
                    width="18.125rem"
                  >
                    <Option>None</Option>
                    {allBreeds.map((breed) => (
                      <Option key={breed.id}>{breed.name}</Option>
                    ))}
                  </Select>
                </div>
                <div className="flex w-1/2 items-end max-sm:mt-4 max-sm:w-[17.1875rem] max-sm:flex-col">
                  <div className="flex w-5/6 flex-col max-sm:w-full">
                    <Label>LIMIT</Label>
                    <Select
                      value={value}
                      onChange={handleValueChange}
                      className="bg-white dark:bg-stone-900 dark:text-white"
                      width="15rem"
                    >
                      <Option>5 items per page</Option>
                      <Option>10 items per page</Option>
                      <Option>15 items per page</Option>
                      <Option>20 items per page</Option>
                    </Select>
                  </div>
                  <UpdateButton onClick={handleUploadButtonClick} />
                </div>
              </div>
            </div>
            <div className="-ml-5 flex flex-col self-center sm:hidden">
              {searchedBreeds.map((breed) => (
                <PetImage key={breed.id} url={breed.url}>
                  <SmallFavouriteButton
                    isFavourite={
                      undefined !== breeds.find((b) => b.url === breed.url)
                    }
                    onClick={() => handleClick(breed.id, breed.url)}
                  />
                </PetImage>
              ))}
            </div>
            <Grid
              type="Gallery"
              breedsImages={[]}
              galleryImages={searchedBreeds}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </ActionsContainer>
        </RightSectionContainer>
      </Container>
    </>
  );
}
