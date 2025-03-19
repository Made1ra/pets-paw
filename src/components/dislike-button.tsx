export default function DislikeButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="h-20 w-20 cursor-pointer rounded-br-2xl rounded-tr-2xl bg-amber-200 bg-[url('/dislike-white-30.svg')] bg-center bg-no-repeat hover:bg-opacity-30 hover:bg-[url('/dislike-color-30.svg')]"
      onClick={onClick}
    />
  );
}
