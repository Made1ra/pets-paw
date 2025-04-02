import { Category, Action } from "@/lib/enums";
import type { Breed } from "@/lib/types";
import { formatDate } from "@/lib/utils/format-date";
import { useBreedStore } from "@/lib/stores/breed";
import { useLogStore } from "@/lib/stores/log";
import PetImage from "@/components/pet-image";

export default function VotedGrid({
  type,
  images,
}: {
  type: Category;
  images: Breed[];
}) {
  const removeBreed = useBreedStore((state) => state.removeBreed);
  const addLog = useLogStore((state) => state.addLog);

  const gridPattern: Array<typeof images> = [];
  const gridSize = 5;
  for (let i = 0; i < images.length; i += gridSize) {
    gridPattern.push(images.slice(i, i + gridSize));
  }

  const handleClick = (reference_image_id: string) => {
    removeBreed(reference_image_id);
    addLog({
      reference_image_id,
      dateOfEditing: formatDate(new Date()),
      category: Category.Favourites,
      action: Action.RemovedFrom,
    });
  };

  return (
    <div className="mb-8 mt-2 inline-flex h-fit w-[42.5rem] flex-col items-start gap-5 rounded-[1.25rem] bg-white dark:bg-stone-900 dark:bg-opacity-5 max-sm:hidden">
      {gridPattern.map((_, i) =>
        i % 2 === 0 ? (
          <div
            className="relative h-[28.75rem] w-[40rem]"
            key={crypto.randomUUID()}
          >
            <PetImage
              className={`absolute left-0 top-0 h-[18.75rem] w-[12.5rem] rounded-3xl bg-stone-300 ${!gridPattern[i][0] && "invisible"}`}
              url={gridPattern[i][0]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][0].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                />
              )}
            </PetImage>
            <PetImage
              className={`absolute -top-80 left-[13.75rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300 ${!gridPattern[i][1] && "invisible"}`}
              url={gridPattern[i][1]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][1].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                />
              )}
            </PetImage>
            <PetImage
              className={`absolute left-[27.5rem] top-[-29.75rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300 ${!gridPattern[i][2] && "invisible"}`}
              url={gridPattern[i][2]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][2].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                />
              )}
            </PetImage>
            <PetImage
              className={`absolute left-[13.75rem] top-[-29.5rem] h-[18.75rem] w-[26.25rem] rounded-3xl bg-stone-300 ${!gridPattern[i][3] && "invisible"}`}
              url={gridPattern[i][3]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][3].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                />
              )}
            </PetImage>
            <PetImage
              className={`absolute left-0 top-[-39rem] h-[8.75rem] w-[12.5rem] rounded-3xl bg-stone-300 ${!gridPattern[i][4] && "invisible"}`}
              url={gridPattern[i][4]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][4].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
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
              className={`absolute -left-8 -top-8 h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][0] && "invisible"}`}
              url={gridPattern[i][0]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][0].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                />
              )}
            </PetImage>
            <PetImage
              className={`absolute -left-64 top-[-11.75rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][1] && "invisible"}`}
              url={gridPattern[i][1]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][1].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                />
              )}
            </PetImage>
            <PetImage
              className={`absolute left-[-29.5rem] top-[-21.5rem] h-[18.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][2] && "invisible"}`}
              url={gridPattern[i][2]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][2].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                />
              )}
            </PetImage>
            <PetImage
              className={`relative -left-8 top-[-51rem] h-[18.75rem] w-[26.25rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][3] && "invisible"}`}
              url={gridPattern[i][3]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][3].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                />
              )}
            </PetImage>
            <PetImage
              className={`absolute left-[-29.5rem] top-[-80.75rem] h-[8.75rem] w-[12.5rem] origin-top-left rotate-180 rounded-3xl bg-stone-300 ${!gridPattern[i][4] && "invisible"}`}
              url={gridPattern[i][4]?.url}
            >
              {type === Category.Favourites && (
                <div
                  onClick={() =>
                    handleClick(gridPattern[i][4].reference_image_id)
                  }
                  className="absolute z-10 h-10 w-10 rounded-[0.625rem] bg-white bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                />
              )}
            </PetImage>
          </div>
        ),
      )}
    </div>
  );
}
