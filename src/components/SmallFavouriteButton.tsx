type SmallFavoriteButtonProps = {
    onClick: () => void;
    isFavourite: boolean;
}

function SmallFavouriteButton({ onClick, isFavourite }: SmallFavoriteButtonProps) {
    return (
        <div
            onClick={onClick}
            className={`absolute w-[60px] h-[60px] bg-white rounded-[20px] z-20 bg-no-repeat bg-center ${isFavourite ? 'bg-[url("../src/assets/fav-color-20.svg")]' : 'bg-[url("../src/assets/fav-20.svg")]'}
            dark:bg-zinc-800 hover:bg-red-100 dark:hover:bg-red-100 active:bg-rose-400 dark:active:bg-rose-400 active:${isFavourite ? 'bg-[url("../src/assets/fav-full-white-20.svg")]' : 'bg-[url("../src/assets/fav-white-20.svg")]'}`}
        />
    );
}

export default SmallFavouriteButton;
