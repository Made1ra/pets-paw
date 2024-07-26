export default function FavouriteButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="mx-1 h-20 w-20 cursor-pointer bg-rose-400 bg-[url('/fav-white-30.svg')] bg-center bg-no-repeat hover:bg-opacity-30 hover:bg-[url('/fav-30.svg')] active:bg-[url('/fav-full-white-30.svg')]"
      onClick={onClick}
    />
  );
}
