export default function LikeButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="h-20 w-20 cursor-pointer rounded-bl-2xl rounded-tl-2xl bg-green-300 bg-[url('/like-white-30.svg')] bg-center bg-no-repeat hover:bg-opacity-30 hover:bg-[url('/like-color-30.svg')]"
      onClick={onClick}
    />
  );
}
