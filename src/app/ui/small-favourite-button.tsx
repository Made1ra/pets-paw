export default function SmallFavouriteButton({
    onClick,
    isFavourite
}: {
    onClick: () => void
    isFavourite: boolean
}) {
    return (
        <div
            onClick={onClick}
            className={`absolute w-[3.75rem] h-[3.75rem] bg-white rounded-[1.25rem] z-20 bg-no-repeat bg-center ${isFavourite ? 'bg-[url("/fav-color-20.svg")]' : 'bg-[url("/fav-20.svg")]'}
            dark:bg-zinc-800 hover:bg-red-100 dark:hover:bg-red-100 active:bg-rose-400 dark:active:bg-rose-400 active:${isFavourite ? 'bg-[url("/fav-full-white-20.svg")]' : 'bg-[url("/fav-white-20.svg")]'}`}
        />
    );
}
