type FavouriteButtonProps = {
    onClick: () => void;
};

function FavouriteButton({ onClick }: FavouriteButtonProps) {
    return (
        <div
            className="w-20 h-20 cursor-pointer mx-1 bg-rose-400 bg-center bg-no-repeat bg-[url('../src/assets/fav-white-30.svg')]
            hover:bg-opacity-30 hover:bg-[url('../src/assets/fav-30.svg')]
            active:bg-[url('../src/assets/fav-full-white-30.svg')]"
            onClick={onClick}
        />
    );
}

export default FavouriteButton;
