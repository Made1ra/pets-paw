type UpdateButtonProps = {
    onClick: () => void;
};

function UpdateButton({ onClick }: UpdateButtonProps) {
    return (
        <div
            className="w-10 h-10 bg-white ml-4 rounded-[10px] bg-no-repeat bg-center bg-[url('../src/assets/update-20.svg')] cursor-pointer
            dark:bg-stone-900 hover:bg-rose-400 dark:hover:bg-rose-400 hover:bg-[url('../src/assets/update-white-20.svg')]"
            onClick={onClick}
        />
    );
}

export default UpdateButton;
