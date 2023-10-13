type DislikeButtonProps = {
    onClick: () => void;
};

function DislikeButton({ onClick }: DislikeButtonProps) {
    return (
        <div
            className="w-20 h-20 cursor-pointer bg-amber-200 rounded-tr-2xl rounded-br-2xl bg-center bg-no-repeat bg-[url('../src/assets/dislike-white-30.svg')]
            hover:bg-opacity-30 hover:bg-[url('../src/assets/dislike-color-30.svg')]"
            onClick={onClick}
        />
    );
}

export default DislikeButton;
