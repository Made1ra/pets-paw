import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Breed, addBreed, removeBreed, addLog } from "@/app/lib/store";
import { formatDate } from "@/app/lib/utils/format-date";
import PetImage from "@/app/ui/pet-image";
import SmallFavouriteButton from "@/app/ui/small-favourite-button";
import Button from "@/app/ui/button";

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
    url: string;
    breeds: [
      {
        reference_image_id: string;
        id: string;
        name?: string;
      },
    ];
  }[];
}) {
  const breeds = useSelector(
    (state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds,
  );
  const dispatch = useDispatch();

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

  return (
    <div className="mb-8 mt-2 inline-flex h-fit w-[42.5rem] flex-col items-start gap-5 rounded-[1.25rem] bg-white dark:bg-stone-900 dark:bg-opacity-5 max-sm:hidden">
      {gridPattern.map((_, i) =>
        i % 2 === 0 ? (
          <div
            className="relative h-[28.75rem] w-[40rem]"
            key={crypto.randomUUID()}
          >
            <PetImage
              className="absolute left-0 top-0 h-[18.75rem] w-[12.5rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][0].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][0].breeds[0]?.id}`}>
                  <Button className="absolute left-2 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][0].breeds[0].name || ""}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][0].url)
                  }
                  onClick={() => handleClick(gridPattern[i][0].url)}
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[13.75rem] top-[-10rem] h-[18.75rem] w-[26.25rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][1].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][1].breeds[0]?.id}`}>
                  <Button className="absolute left-28 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][1].breeds[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][1].url)
                  }
                  onClick={() => handleClick(gridPattern[i][1].url)}
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[13.75rem] top-[-39.5rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][2].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][2].breeds[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][2].breeds[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][2].url)
                  }
                  onClick={() => handleClick(gridPattern[i][2].url)}
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-0 top-[-29.5rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][3].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][3].breeds[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][3].breeds[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][3].url)
                  }
                  onClick={() => handleClick(gridPattern[i][3].url)}
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[27.5rem] top-[-59rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300"
              url={gridPattern[i][4].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][4].breeds[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][4].breeds[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][4].url)
                  }
                  onClick={() => handleClick(gridPattern[i][4].url)}
                />
              )}
            </PetImage>
          </div>
        ) : (
          <div
            className="relative h-[28.75rem] w-[40rem] origin-top-left rotate-180"
            key={crypto.randomUUID()}
          >
            <PetImage
              className="absolute -top-8 left-[-29.5rem] h-[18.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][0].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][0].breeds[0]?.id}`}>
                  <Button className="absolute left-2 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][0].breeds[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][0].url)
                  }
                  onClick={() => handleClick(gridPattern[i][0].url)}
                />
              )}
            </PetImage>
            <PetImage
              className="absolute -left-8 top-[-31.5rem] h-[18.75rem] w-[26.25rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][1].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][1].breeds[0]?.id}`}>
                  <Button className="absolute left-28 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][1].breeds[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][1].url)
                  }
                  onClick={() => handleClick(gridPattern[i][1].url)}
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[-15.5rem] top-[-41.5rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][2].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][2].breeds[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][2].breeds[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][2].url)
                  }
                  onClick={() => handleClick(gridPattern[i][2].url)}
                />
              )}
            </PetImage>
            <PetImage
              className="absolute -left-8 top-[-51rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][3].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][3].breeds[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][3].breeds[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][3].url)
                  }
                  onClick={() => handleClick(gridPattern[i][3].url)}
                />
              )}
            </PetImage>
            <PetImage
              className="absolute left-[-29.75rem] top-[-80.75rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300"
              url={gridPattern[i][4].url}
            >
              {type === "Breeds" && (
                <Link href={`/breeds/${gridPattern[i][4].breeds[0]?.id}`}>
                  <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                    {gridPattern[i][4].breeds[0]?.name}
                  </Button>
                </Link>
              )}
              {type === "Gallery" && (
                <SmallFavouriteButton
                  isFavourite={
                    undefined !==
                    breeds.find((b) => b.url === gridPattern[i][4].url)
                  }
                  onClick={() => handleClick(gridPattern[i][4].url)}
                />
              )}
            </PetImage>
          </div>
        ),
      )}
    </div>
  );
}
