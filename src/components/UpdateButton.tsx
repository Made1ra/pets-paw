type UpdateButtonProps = {
    onClick: () => void;
};

function UpdateButton({ onClick }: UpdateButtonProps) {
    return (
        <div
            className="w-10 h-10 bg-white rounded-[10px] bg-no-repeat bg-center bg-[url('src/assets/update-20.svg')] cursor-pointer
            hover:bg-rose-400 hover:bg-[url('src/assets/update-white-20.svg')]"
            onClick={onClick}
        />
    );
}

export default UpdateButton;