import { Log } from "@/app/lib/store";

export default function ActionMessage({
  dateOfEditing,
  reference_image_id,
  category,
  action,
}: Log) {
  return (
    <div className="mb-3 flex h-[7.375rem] w-[18.4375rem] flex-shrink-0 flex-row items-center justify-between rounded-[0.625rem] bg-stone-50 px-4 py-4 dark:bg-white dark:bg-opacity-5 sm:h-[3.75rem] sm:w-[47rem] lg:w-[42.25rem]">
      <div className="flex h-[1.875rem] w-[3.8125rem] items-center justify-center rounded-[0.3125rem] bg-white dark:bg-stone-900">
        <div className="w-[2.5625rem] font-jost text-base font-normal leading-normal text-stone-900 dark:text-white">
          {dateOfEditing}
        </div>
      </div>
      <div className="w-full max-sm:mx-4 sm:ml-4">
        <span className="font-jost text-base font-normal leading-normal text-neutral-400">
          Image ID:
        </span>
        <span className="mx-2 font-jost text-base font-medium leading-normal text-stone-900 dark:text-white">
          {reference_image_id}
        </span>
        <span className="font-jost text-base font-normal leading-normal text-neutral-400">
          was {action} {category}
        </span>
      </div>
      <div className="flex items-start justify-start">
        <>
          {category === "Likes" && (
            <div className="h-5 w-5 flex-shrink-0 bg-[url('/like-color-20.svg')] bg-center bg-no-repeat" />
          )}
          {category === "Favourites" && (
            <div className="h-5 w-5 flex-shrink-0 bg-[url('/fav-color-20.svg')] bg-center bg-no-repeat" />
          )}
          {category === "Dislikes" && (
            <div className="h-5 w-5 flex-shrink-0 bg-[url('/dislike-color-20.svg')] bg-center bg-no-repeat" />
          )}
        </>
      </div>
    </div>
  );
}
