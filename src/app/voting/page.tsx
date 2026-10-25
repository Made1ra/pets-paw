"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { useVotingImageQuery } from "@/hooks";
import { useLogStore } from "@/lib/stores/log";
import {
  ActionMessage,
  ActionsContainer,
  Burger,
  Container,
  Controls,
  ControlsContainer,
  ImageContainer,
  LargeTextButton,
  LeftSection,
  LinkContainer,
  NavigationContainer,
  RightSectionContainer,
  SearchBar,
  Smiles,
  SmallLink,
} from "@/components";

export default function Voting() {
  const logs = useLogStore((state) => state.logs);

  const pathname = usePathname();

  const imageQuery = useVotingImageQuery();

  const randomImage = imageQuery.data ?? null;

  const handleLikeDislikeClick = () => {
    void imageQuery.refetch();
  };

  return (
    <Container>
      <LeftSection isActive={pathname === "/voting" ? 1 : 4} />
      <RightSectionContainer>
        <LinkContainer>
          <Burger isActive={pathname === "/voting" ? 1 : 4} />
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
              .map((log) => (
                <ActionMessage
                  id={log.id}
                  key={log.id}
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
