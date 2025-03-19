export default function SmallFavouriteButton({
  onClick,
  isFavourite,
}: {
  onClick: () => void;
  isFavourite: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`absolute z-20 h-[3.75rem] w-[3.75rem] rounded-[1.25rem] bg-white bg-center bg-no-repeat ${
        isFavourite
          ? 'bg-[url("/fav-color-20.svg")]'
          : 'bg-[url("/fav-20.svg")]'
      } hover:bg-red-100 active:bg-rose-400 dark:bg-zinc-800 dark:hover:bg-red-100 dark:active:bg-rose-400 active:${
        isFavourite
          ? 'bg-[url("/fav-full-white-20.svg")]'
          : 'bg-[url("/fav-white-20.svg")]'
      }`}
    />
  );
}
