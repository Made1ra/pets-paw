export default function FavouriteButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="w-20 h-20 cursor-pointer mx-1 bg-rose-400 bg-center bg-no-repeat bg-[url('/fav-white-30.svg')]
            hover:bg-opacity-30 hover:bg-[url('/fav-30.svg')]
            active:bg-[url('/fav-full-white-30.svg')]"
      onClick={onClick}
    />
  );
}
