import Link from "next/link";

import { Category, Action } from "@/lib/enums";
import { useBreedStore, useLogStore } from "@/lib/stores";
import { formatDate } from "@/lib/utils";
import { Button, PetImage, SmallFavouriteButton } from "@/components";

export default function Grid({
  type,
  breedsImages,
  galleryImages,
}: {
  type: "Breeds" | "Gallery";
  breedsImages: {
    id: string;
    url: string;
    breeds: {
      name?: string;
      id: string;
    }[];
  }[];
  galleryImages: {
    id: string;
    url: string;
    breeds?: {
      reference_image_id: string;
      id: string;
      name?: string;
    }[];
  }[];
}) {
  const breeds = useBreedStore((state) => state.breeds);

  const addBreed = useBreedStore((state) => state.addBreed);

  const removeBreed = useBreedStore((state) => state.removeBreed);

  const addLog = useLogStore((state) => state.addLog);

  let images = [];
  if (type === "Breeds") {
    images = breedsImages;
  } else {
    images = galleryImages;
  }

  const gridPattern: Array<typeof images> = [];
  const gridSize = 5;
  for (let i = 0; i < images.length; i += gridSize) {
    gridPattern.push(images.slice(i, i + gridSize));
  }

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
    <div className="mb-8 mt-2 inline-flex h-fit w-[42.5rem] flex-col items-start gap-5 rounded-[1.25rem] bg-white dark:bg-stone-900 dark:bg-opacity-5 max-sm:hidden">
      {gridPattern.map((_, i) =>
        i % 2 === 0 ? (
          <div
            className="relative h-[28.75rem] w-[40rem]"
            key={gridPattern[i][0].id}
          >
            <PetImage
              className="absolute left-0 top-0 h-[18.75rem] w-[12.5rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][0]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][0].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][0].breeds?.[0]?.id}`}>
                  <Button className="absolute left-2 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][0].breeds?.[0]?.name || ""}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][0] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][0].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][0].id, gridPattern[i][0].url)
                  }
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[13.75rem] top-[-10rem] h-[18.75rem] w-[26.25rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][1]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][1].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][1].breeds?.[0]?.id}`}>
                  <Button className="absolute left-28 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][1].breeds?.[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][1] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][1].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][1].id, gridPattern[i][1].url)
                  }
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[13.75rem] top-[-39.5rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][2]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][2].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][2].breeds?.[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][2].breeds?.[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][2] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][2].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][2].id, gridPattern[i][2].url)
                  }
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-0 top-[-29.5rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][3]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][3].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][3].breeds?.[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][3].breeds?.[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][3] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][3].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][3].id, gridPattern[i][3].url)
                  }
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[27.5rem] top-[-59rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][4]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][4].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][4].breeds?.[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][4].breeds?.[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][4] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][4].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][4].id, gridPattern[i][4].url)
                  }
                />
              )}
            </PetImage>
          </div>
        ) : (
          <div
            className="relative h-[28.75rem] w-[40rem] origin-top-left rotate-180"
            key={gridPattern[i][0].id}
          >
            <PetImage
              className="absolute -top-8 left-[-29.5rem] h-[18.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][0]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][0].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][0].breeds?.[0]?.id}`}>
                  <Button className="absolute left-2 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][0].breeds?.[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][0] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][0].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][0].id, gridPattern[i][0].url)
                  }
                />
              )}
            </PetImage>
            <PetImage
              className="absolute -left-8 top-[-31.5rem] h-[18.75rem] w-[26.25rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][1]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][1].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][1].breeds?.[0]?.id}`}>
                  <Button className="absolute left-28 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][1].breeds?.[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][1] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][1].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][1].id, gridPattern[i][1].url)
                  }
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[-15.5rem] top-[-41.5rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][2]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][2].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][2].breeds?.[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][2].breeds?.[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][2] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][2].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][2].id, gridPattern[i][2].url)
                  }
                />
              )}
            </PetImage>
            <PetImage
              className="absolute -left-8 top-[-51rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][3]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][3].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][3].breeds?.[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][3].breeds?.[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][3] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][3].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][3].id, gridPattern[i][3].url)
                  }
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[-29.75rem] top-[-80.75rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][4]?.url ?? ""}
            >
              {type === "Breeds" && gridPattern[i][4].breeds?.[0] && (
                <Link href={`/breeds/${gridPattern[i][4].breeds?.[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][4].breeds?.[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && gridPattern[i][4] && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][4].url)
                  }
                  onClick={() =>
                    handleClick(gridPattern[i][4].id, gridPattern[i][4].url)
                  }
                />
              )}
            </PetImage>
          </div>
        ),
      )}
    </div>
  );
}
