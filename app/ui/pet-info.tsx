export default function PetInfo({
  name,
  description,
  temperament,
  origin,
  weight,
  lifeSpan,
}: {
  name: string;
  description: string;
  temperament: string;
  origin: string;
  weight: string;
  lifeSpan: string;
}) {
  return (
    <div className="mt-6 h-fit w-[40rem] rounded-[1.25rem] border-2 border-red-100 p-2 dark:border-rose-400 dark:border-opacity-20 max-sm:w-[18.4375rem] sm:ml-14 lg:ml-0">
      <div className="flex justify-center">
        <div className="z-20 -mt-8 w-fit bg-white text-center font-jost text-4xl font-medium text-stone-900 dark:bg-zinc-800 dark:bg-opacity-5 dark:text-white">
          {name}
        </div>
      </div>
      <div className="text-center font-jost text-xl font-medium text-neutral-400">
        {description}
      </div>
      <div className="mt-4 flex max-sm:flex-col">
        <div className="w-[16.875rem]">
          <span className="font-jost text-base font-medium text-stone-900 dark:text-white">
            Temperament:
            <br />
          </span>
          <span className="font-jost text-base font-normal text-neutral-400">
            {temperament}
          </span>
        </div>
        <div className="flex-1 sm:ml-4">
          <div className="w-[16.33063rem]">
            <span className="font-jost text-base font-medium text-stone-900 dark:text-white">
              Origin:
            </span>
            <span className="font-jost text-base font-normal text-neutral-400">
              {` ${origin}`}
            </span>
          </div>
          <div className="mt-2 w-[16.33063rem]">
            <span className="font-jost text-base font-medium text-stone-900 dark:text-white">
              Weight:
            </span>
            <span className="font-jost text-base font-normal text-neutral-400">
              {` ${weight} kgs`}
            </span>
          </div>
          <div className="mt-2 w-[16.875rem]">
            <span className="font-jost text-base font-medium text-stone-900 dark:text-white">
              Life span:
            </span>
            <span className="font-jost text-base font-normal text-neutral-400">
              {` ${lifeSpan} years`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
