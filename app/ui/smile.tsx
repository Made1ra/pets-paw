export default function Smile({ title }: { title: string }) {
  return (
    <>
      {title === "likes" && (
        <div
          className={`mx-2 my-4 flex h-[3.75rem] w-[3.75rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-[1.25rem] bg-white bg-[url("/like-30.svg")] bg-center bg-no-repeat hover:bg-red-100 active:bg-rose-400 active:bg-[url("/like-white-30.svg")] dark:bg-opacity-5 dark:hover:bg-red-100 dark:active:bg-rose-400`}
        />
      )}
      {title === "favourites" && (
        <div
          className={`mx-2 my-4 flex h-[3.75rem] w-[3.75rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-[1.25rem] bg-white bg-[url("/fav-30.svg")] bg-center bg-no-repeat hover:bg-red-100 active:bg-rose-400 active:bg-[url("/fav-white-30.svg")] dark:bg-opacity-5 dark:hover:bg-red-100 dark:active:bg-rose-400`}
        />
      )}
      {title === "dislikes" && (
        <div
          className={`mx-2 my-4 flex h-[3.75rem] w-[3.75rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-[1.25rem] bg-white bg-[url("/dislike-30.svg")] bg-center bg-no-repeat hover:bg-red-100 active:bg-rose-400 active:bg-[url("/dislike-white-30.svg")] dark:bg-opacity-5 dark:hover:bg-red-100 dark:active:bg-rose-400`}
        />
      )}
    </>
  );
}
