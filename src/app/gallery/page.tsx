"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { Breed, addBreed, addLog, removeBreed } from "@/lib/store";
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

export default function Gallery() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const breeds = useSelector(
    (state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds,
  );
  const dispatch = useDispatch();

  const [shouldBeUpdated, setShouldBeUpdated] = useState(true);
  const [order, setOrder] = useState("Random");
  const [type, setType] = useState("Static");
  const [breedValue, setBreedValue] = useState("None");
  const [value, setValue] = useState("5 items per page");
  const [allBreeds, setAllBreeds] = useState<
    {
      id: string;
      name: string;
      reference_image_id: string;
      image: { url: string; id: string };
    }[]
  >([]);
  const [searchedBreeds, setSearchedBreeds] = useState<
    { url: string; breeds: [{ reference_image_id: string; id: string }] }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  function openModal() {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  }

  async function handleClick(url: string) {
    const match = url.match(/\/images\/([^/]+)\.\w+$/);
    let id = "";
    if (match) {
      id = match[1];
    }
    const filteredBreeds = breeds.find((breed) => breed.url === url);
    if (!filteredBreeds) {
      dispatch(
        addBreed({
          reference_image_id: id,
          dateOfEditing: formatDate(new Date()),
          category: "Favourites",
          url,
        }),
      );
      dispatch(
        addLog({
          reference_image_id: id,
          dateOfEditing: formatDate(new Date()),
          category: "Favourites",
          action: "added to",
        }),
      );
    } else {
      dispatch(
        removeBreed({
          reference_image_id: filteredBreeds.reference_image_id,
          dateOfEditing: formatDate(new Date()),
          category: "Favourites",
        }),
      );
      dispatch(
        addLog({
          reference_image_id: filteredBreeds.reference_image_id,
          dateOfEditing: formatDate(new Date()),
          category: "Favourites",
          action: "removed from",
        }),
      );
    }
  }

  useEffect(() => {
    const getBreeds = async () => {
      const headers = new Headers();
      headers.append("x-api-key", API_KEY || "");
      const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: headers,
      });
      const data = await response.json();
      setAllBreeds(data);
    };
    getBreeds();
  }, [API_KEY]);

  useEffect(() => {
    const getBreeds = async () => {
      const searchedBreed = allBreeds.filter(
        (breed) => breed.name === breedValue,
      );
      let breed_ids = "";
      if (searchedBreed.length !== 0) {
        breed_ids = searchedBreed[0].id;
      }

      let breedOrder = "";
      if (order === "Random") {
        breedOrder = "RAND";
      } else if (order === "Desc") {
        breedOrder = "DESC";
      } else if (order === "Asc") {
        breedOrder = "ASC";
      }

      let mime_types = "";
      if (type === "Static") {
        mime_types = "jpg,png";
      } else if (type === "Animated") {
        mime_types = "gif";
      }

      const limit = value.match(/\d+/g);

      const baseUrl =
        "https://api.thecatapi.com/v1/images/search?has_breeds=1&";
      const headers = new Headers();
      headers.append("x-api-key", API_KEY || "");
      const response = await fetch(
        `${baseUrl}breed_ids=${breed_ids}&order=${breedOrder}&mime_types=${mime_types}&limit=${limit}`,
        {
          headers: headers,
        },
      );
      const data = await response.json();
      setSearchedBreeds(data);
    };

    if (allBreeds.length !== 0 && shouldBeUpdated) {
      getBreeds();
      setShouldBeUpdated(false);
    }
  }, [API_KEY, allBreeds, order, type, breedValue, value, shouldBeUpdated]);

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
              <UploadButton onClick={() => openModal()} />
            </NavigationContainer>
            <div className="flex h-fit w-[18.4375rem] flex-wrap rounded-[1.25rem] bg-stone-50 py-4 pr-4 dark:bg-white dark:bg-opacity-5 max-sm:w-[18.5rem] sm:w-[47rem] lg:w-[42.5rem]">
              <div className="flex w-full max-sm:flex-col max-sm:items-center max-sm:justify-center">
                <div className="flex w-1/2 flex-col max-sm:w-[17.1875rem]">
                  <Label>ORDER</Label>
                  <Select
                    value={order}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setOrder(e.target.value)
                    }
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
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setType(e.target.value)
                    }
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
                    onChange={(e) => setBreedValue(e.target.value)}
                    className="bg-white dark:bg-stone-900 dark:text-white"
                    width="18.125rem"
                  >
                    <Option>None</Option>
                    {allBreeds.map((breed) => (
                      <Option key={breed.name}>{breed.name}</Option>
                    ))}
                  </Select>
                </div>
                <div className="flex w-1/2 items-end max-sm:mt-4 max-sm:w-[17.1875rem] max-sm:flex-col">
                  <div className="flex w-5/6 flex-col max-sm:w-full">
                    <Label>LIMIT</Label>
                    <Select
                      value={value}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setValue(e.target.value)
                      }
                      className="bg-white dark:bg-stone-900 dark:text-white"
                      width="15rem"
                    >
                      <Option>5 items per page</Option>
                      <Option>10 items per page</Option>
                      <Option>15 items per page</Option>
                      <Option>20 items per page</Option>
                    </Select>
                  </div>
                  <UpdateButton onClick={() => setShouldBeUpdated(true)} />
                </div>
              </div>
            </div>
            <div className="-ml-5 flex flex-col self-center sm:hidden">
              {searchedBreeds.map((breed) => (
                <PetImage key={breed.url} url={breed.url}>
                  <SmallFavouriteButton
                    isFavourite={
                      undefined !== breeds.find((b) => b.url === breed.url)
                    }
                    onClick={() => handleClick(breed.url)}
                  />
                </PetImage>
              ))}
            </div>
            <Grid
              type="Gallery"
              breedsImages={[]}
              galleryImages={searchedBreeds}
            />
            <Modal isOpen={isModalOpen} onClose={() => closeModal()} />
          </ActionsContainer>
        </RightSectionContainer>
      </Container>
    </>
  );
}
