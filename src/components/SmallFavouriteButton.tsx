type SmallFavoriteButtonProps = {
    onClick: () => void;
}

function SmallFavouriteButton({ onClick }: SmallFavoriteButtonProps) {
    return (
        <div
            onClick={onClick}
            className="absolute w-[60px] h-[60px] bg-white rounded-[20px] z-20 bg-no-repeat bg-center bg-[url('../src/assets/fav-20.svg')]
            dark:bg-zinc-800 hover:bg-red-100 active:bg-rose-400 active:bg-[url('../src/assets/fav-white-20.svg')]"
        />
    );
}

export default SmallFavouriteButton;
