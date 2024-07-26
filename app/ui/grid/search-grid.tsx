import Link from "next/link";
import { nanoid } from "nanoid";
import PetImage from "@/app/ui/pet-image";
import Button from "@/app/ui/button";

export default function SearchGrid({
  images,
}: {
  images: {
    name: string;
    image: {
      url: string;
    };
    id: string;
  }[];
}) {
  const gridPattern: Array<typeof images> = [];
  const gridSize = 5;
  for (let i = 0; i < images.length; i += gridSize) {
    gridPattern.push(images.slice(i, i + gridSize));
  }

  return (
    <div className="mb-8 mt-2 inline-flex h-fit w-[42.5rem] flex-col items-start gap-5 rounded-[1.25rem] bg-white dark:bg-stone-900 dark:bg-opacity-5 max-sm:hidden">
      {gridPattern.map((_, i) =>
        i % 2 === 0 ? (
          <div className="relative h-[28.75rem] w-[40rem]" key={nanoid()}>
            <PetImage
              className={`absolute left-0 top-0 h-[18.75rem] w-[12.5rem] rounded-3xl bg-stone-300 ${!gridPattern[i][0] && "invisible"}`}
              url={gridPattern[i][0]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][0]?.id}`}>
                <Button className="absolute left-2 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][0]?.name}
                </Button>
              </Link>
            </PetImage>
            <PetImage
              className={`absolute -top-80 left-[13.75rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300 ${!gridPattern[i][1] && "invisible"}`}
              url={gridPattern[i][1]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][1]?.id}`}>
                <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][1]?.name}
                </Button>
              </Link>
            </PetImage>
            <PetImage
              className={`absolute left-[27.5rem] top-[-29.75rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300 ${!gridPattern[i][2] && "invisible"}`}
              url={gridPattern[i][2]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][2]?.id}`}>
                <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][2]?.name}
                </Button>
              </Link>
            </PetImage>
            <PetImage
              className={`absolute left-[13.75rem] top-[-29.5rem] h-[18.75rem] w-[26.25rem] rounded-3xl bg-stone-300 ${!gridPattern[i][3] && "invisible"}`}
              url={gridPattern[i][3]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][3]?.id}`}>
                <Button className="absolute left-28 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][3]?.name}
                </Button>
              </Link>
            </PetImage>
            <PetImage
              className={`absolute left-0 top-[-39rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300 ${!gridPattern[i][4] && "invisible"}`}
              url={gridPattern[i][4]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][4]?.id}`}>
                <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][4]?.name}
                </Button>
              </Link>
            </PetImage>
          </div>
        ) : (
          <div
            className="relative h-[28.75rem] w-[40rem] origin-top-left rotate-180"
            key={nanoid()}
          >
            <PetImage
              className={`absolute -left-5 -top-8 h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][0] && "invisible"}`}
              url={gridPattern[i][0]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][0]?.id}`}>
                <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][0]?.name}
                </Button>
              </Link>
            </PetImage>
            <PetImage
              className={`absolute -left-60 top-[-11.75rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][1] && "invisible"}`}
              url={gridPattern[i][1]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][1]?.id}`}>
                <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][1]?.name}
                </Button>
              </Link>
            </PetImage>
            <PetImage
              className={`absolute left-[-29rem] top-[-21.5rem] h-[18.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][2] && "invisible"}`}
              url={gridPattern[i][2]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][2]?.id}`}>
                <Button className="absolute left-2 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][2]?.name}
                </Button>
              </Link>
            </PetImage>
            <PetImage
              className={`relative -left-5 top-[-51rem] h-[18.75rem] w-[26.25rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][3] && "invisible"}`}
              url={gridPattern[i][3]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][3]?.id}`}>
                <Button className="absolute left-28 top-44 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][3]?.name}
                </Button>
              </Link>
            </PetImage>
            <PetImage
              className={`absolute left-[-29rem] top-[-80.75rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][4] && "invisible"}`}
              url={gridPattern[i][4]?.image?.url}
            >
              <Link href={`/breeds/${gridPattern[i][4]?.id}`}>
                <Button className="absolute left-2 top-4 z-20 mt-20 h-[2.125rem] w-[11.25rem] dark:bg-zinc-800">
                  {gridPattern[i][4]?.name}
                </Button>
              </Link>
            </PetImage>
          </div>
        ),
      )}
    </div>
  );
}
