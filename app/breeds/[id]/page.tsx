"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "@/app/ui/container";
import LeftSection from "@/app/ui/left-section";
import RightSectionContainer from "@/app/ui/right-section-container";
import LinkContainer from "@/app/ui/link-container";
import Burger from "@/app/ui/burger/burger";
import SearchBar from "@/app/ui/search-bar";
import Smiles from "@/app/ui/smiles";
import SmallLink from "@/app/ui/small-link";
import ActionsContainer from "@/app/ui/actions-container";
import NavigationContainer from "@/app/ui/navigation-container";
import Loader from "@/app/ui/loader";
import PetInfo from "@/app/ui/pet-info";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/breeds/[id]/swiper.css";

export default function Breed() {
  const { id } = useParams();

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const [searchedBreeds, setSearchedBreeds] = useState<
    {
      id: string;
      url: string;
      breeds: {
        id: string;
        name: string;
        description: string;
        temperament: string;
        origin: string;
        weight: {
          metric: string;
        };
        life_span: string;
      }[];
    }[]
  >([]);

  useEffect(() => {
    const getBreed = async () => {
      const headers = new Headers();
      headers.append("x-api-key", API_KEY || "");
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?has_breeds=1&breed_ids=${id}&limit=5`,
        {
          headers: headers,
        },
      );
      const data = await response.json();
      setSearchedBreeds(data);
    };
    getBreed();
  }, [API_KEY, id]);

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
          {!searchedBreeds.length ? (
            <Loader />
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
                  <SwiperSlide key={breed.url}>
                    <Image
                      className="rounded-[1.25rem]"
                      src={breed.url}
                      alt={breed.breeds[0].name}
                      fill
                      sizes="100vw"
                      priority={true}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <PetInfo
                name={searchedBreeds[0].breeds[0].name}
                description={searchedBreeds[0].breeds[0].description}
                temperament={searchedBreeds[0].breeds[0].temperament}
                origin={searchedBreeds[0].breeds[0].origin}
                weight={searchedBreeds[0].breeds[0].weight.metric}
                lifeSpan={searchedBreeds[0].breeds[0].life_span}
              />
            </>
          )}
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
