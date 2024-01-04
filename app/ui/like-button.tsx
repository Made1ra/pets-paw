export default function LikeButton({
    onClick
}: {
    onClick: () => void
}) {
    return (
        <div
            className="w-20 h-20 cursor-pointer bg-green-300 rounded-tl-2xl rounded-bl-2xl bg-center bg-no-repeat bg-[url('/like-white-30.svg')]
            hover:bg-opacity-30 hover:bg-[url('/like-color-30.svg')]"
            onClick={onClick}
        />
    );
}
