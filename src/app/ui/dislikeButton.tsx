export default function DislikeButton({
    onClick
}: {
    onClick: () => void
}) {
    return (
        <div
            className="w-20 h-20 cursor-pointer bg-amber-200 rounded-tr-2xl rounded-br-2xl bg-center bg-no-repeat bg-[url('/dislike-white-30.svg')]
            hover:bg-opacity-30 hover:bg-[url('/dislike-color-30.svg')]"
            onClick={onClick}
        />
    );
}
