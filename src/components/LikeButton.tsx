type LikeButtonProps = {
    onClick: () => void;
};

function LikeButton({ onClick }: LikeButtonProps) {
    return (
        <div
            className="w-20 h-20 cursor-pointer bg-green-300 rounded-tl-2xl rounded-bl-2xl bg-center bg-no-repeat bg-[url('../src/assets/like-white-30.svg')]
            hover:bg-opacity-30 hover:bg-[url('../src/assets/like-color-30.svg')]"
            onClick={onClick}
        />
    );
}

export default LikeButton;
