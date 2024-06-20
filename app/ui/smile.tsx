export default function Smile({ title }: { title: string }) {
  return (
    <>
      {title === "likes" && (
        <div
          className={`flex flex-shrink-0 items-center justify-center cursor-pointer my-4 mx-2 w-[3.75rem] h-[3.75rem] bg-white rounded-[1.25rem] bg-center bg-no-repeat bg-[url("/like-30.svg")]
                dark:bg-opacity-5 hover:bg-red-100 dark:hover:bg-red-100 active:bg-rose-400 dark:active:bg-rose-400 active:bg-[url("/like-white-30.svg")]`}
        />
      )}
      {title === "favourites" && (
        <div
          className={`flex flex-shrink-0 items-center justify-center cursor-pointer my-4 mx-2 w-[3.75rem] h-[3.75rem] bg-white rounded-[1.25rem] bg-center bg-no-repeat bg-[url("/fav-30.svg")]
                dark:bg-opacity-5 hover:bg-red-100 dark:hover:bg-red-100 active:bg-rose-400 dark:active:bg-rose-400 active:bg-[url("/fav-white-30.svg")]`}
        />
      )}
      {title === "dislikes" && (
        <div
          className={`flex flex-shrink-0 items-center justify-center cursor-pointer my-4 mx-2 w-[3.75rem] h-[3.75rem] bg-white rounded-[1.25rem] bg-center bg-no-repeat bg-[url("/dislike-30.svg")]
                dark:bg-opacity-5 hover:bg-red-100 dark:hover:bg-red-100 active:bg-rose-400 dark:active:bg-rose-400 active:bg-[url("/dislike-white-30.svg")]`}
        />
      )}
    </>
  );
}
