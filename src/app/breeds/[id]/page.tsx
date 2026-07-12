"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useImagesSearchQuery } from "@/hooks/query/use-images-search-query";
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

  const { isLoading, searchedImages = [] } = useImagesSearchQuery({
    has_breeds: 1,
    limit: 5,
    breed_ids: id as string,
  });

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
                {searchedImages.slice(0, 5).map((searchedImage) => (
                  <SwiperSlide key={searchedImage.url}>
                    <Image
                      className="rounded-[1.25rem]"
                      src={searchedImage.url}
                      alt={searchedImage.breeds[0].name}
                      fill
                      sizes="100vw"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <PetInfo
                name={searchedImages[0].breeds[0].name}
                description={searchedImages[0].breeds[0].description}
                temperament={searchedImages[0].breeds[0].temperament}
                origin={searchedImages[0].breeds[0].origin}
                weight={searchedImages[0].breeds[0].weight.metric}
                lifeSpan={searchedImages[0].breeds[0].life_span}
              />
            </>
          )}
        </ActionsContainer>
      </RightSectionContainer>
    </Container>
  );
}
