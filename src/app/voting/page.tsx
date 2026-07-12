"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { useImagesSearchQuery } from "@/hooks/query/use-images-search-query";
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
import ImageContainer from "@/components/image-container";
import ControlsContainer from "@/components/controls-container";
import Controls from "@/components/controls";
import ActionMessage from "@/components/action-message";

export default function Voting() {
  const logs = useLogStore((state) => state.logs);

  const pathname = usePathname();

  const isVoting = pathname === "/voting";

  const { searchedImages, refetch } = useImagesSearchQuery({
    has_breeds: 1,
    limit: 1,
  });

  const randomImage = searchedImages?.[0];

  const handleLikeDislikeClick = () => {
    refetch();
  };

  return (
    <Container>
      <LeftSection isActive={isVoting ? 1 : 4} />
      <RightSectionContainer>
        <LinkContainer>
          <Burger isActive={isVoting ? 1 : 4} />
          <SearchBar />
          <Smiles />
        </LinkContainer>
        <ActionsContainer>
          <NavigationContainer>
            <SmallLink />
            <LargeTextButton>VOTING</LargeTextButton>
          </NavigationContainer>
          <ImageContainer>
            {randomImage && (
              <div className="relative h-[10.38306rem] w-[18.4375rem] rounded-[1.25rem] sm:h-[23.5115rem] sm:w-[41.75rem] lg:h-[22.5rem] lg:w-[40rem]">
                <Image
                  className="rounded-[1.25rem]"
                  src={randomImage.url}
                  alt="Cat image"
                  fill
                  sizes="100vw"
                />
              </div>
            )}
            <ControlsContainer>
              <Controls
                reference_image_id={randomImage ? randomImage.id : ""}
                url={randomImage ? randomImage.url : ""}
                onLikeDislikeClick={handleLikeDislikeClick}
              />
            </ControlsContainer>
          </ImageContainer>
          {logs.length > 0 &&
            logs
              .toReversed()
              .map((log, index) => (
                <ActionMessage
                  key={index}
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
