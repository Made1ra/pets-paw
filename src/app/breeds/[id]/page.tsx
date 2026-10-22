"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { BASE_URL, headers } from "@/lib/constants";
import Container from "@/components/container";
import LeftSection from "@/components/left-section";
import RightSectionContainer from "@/components/right-section-container";
import LinkContainer from "@/components/link-container";
import Burger from "@/components/burger/burger";
import SearchBar from "@/components/search-bar";
import Smiles from "@/components/smiles";
import SmallLink from "@/components/small-link";
import ActionsContainer from "@/components/actions-container";
import NavigationContainer from "@/components/navigation-container";
import Loader from "@/components/loader";
import PetInfo from "@/components/pet-info";

import "swiper/css";
import "swiper/css/pagination";
import "@/app/breeds/[id]/swiper.css";

export default function Breed() {
  const { id } = useParams();

  const [searchedBreeds, setSearchedBreeds] = useState<
    {
      id: string;
      url: string;
      breeds: { id: string; name: string }[];
    }[]
  >([]);
  const [breedInfo, setBreedInfo] = useState<{
    name: string;
    description: string;
    temperament: string;
    origin: string;
    weight: { metric: string };
    life_span: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBreed = async () => {
      try {
        const [breedResponse, imageResponse] = await Promise.all([
          fetch(`${BASE_URL}/breeds/${id}`, { headers }),
          fetch(
            `${BASE_URL}/images/search?has_breeds=1&breed_ids=${id}&limit=5`,
            { headers },
          ),
        ]);
        const [breedData, imageData] = await Promise.all([
          breedResponse.ok ? breedResponse.json() : null,
          imageResponse.ok ? imageResponse.json() : [],
        ]);
        setBreedInfo(breedData);
        setSearchedBreeds(
          Array.isArray(imageData)
            ? imageData.filter((image) => image.breeds?.length)
            : [],
        );
      } catch {
        setBreedInfo(null);
        setSearchedBreeds([]);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    setBreedInfo(null);
    getBreed();
  }, [id]);

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
            <div className="ml-2 flex h-10 w-[8.9375rem] items-center justify-center rounded-[0.625rem] bg-red-100 text-center font-jost text-xl font-medium leading-[1.875rem] tracking-widest text-rose-400 hover:bg-rose-400 hover:text-white dark:bg-rose-400 dark:bg-opacity-20 dark:text-rose-400 dark:hover:bg-rose-400 dark:hover:text-white">
              BREEDS
            </div>
            <div className="ml-2 flex h-10 w-fit items-center justify-center rounded-[0.625rem] bg-rose-400 p-4 text-center uppercase text-white hover:bg-red-100 hover:text-rose-400">
              <div className="w-fit text-center font-jost text-xl font-medium leading-[1.875rem] tracking-widest">
                {id}
              </div>
            </div>
          </NavigationContainer>
          {isLoading ? (
            <Loader />
          ) : !breedInfo || searchedBreeds.length === 0 ? (
            <p className="font-jost text-base text-neutral-400">
              Breed information is unavailable. Check your Cat API key.
            </p>
          ) : (
            <>
              <Swiper
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                grabCursor
                modules={[Pagination]}
              >
                {searchedBreeds.slice(0, 5).map((breed) => (
                  <SwiperSlide key={breed.id}>
                    <Image
                      className="rounded-[1.25rem]"
                      src={breed.url}
                      alt={breed.breeds[0]?.name ?? "Cat"}
                      fill
                      sizes="100vw"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <PetInfo
                name={breedInfo.name}
                description={breedInfo.description}
                temperament={breedInfo.temperament}
                origin={breedInfo.origin}
                weight={breedInfo.weight.metric}
                lifeSpan={breedInfo.life_span}
              />
            </>
          )}
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
