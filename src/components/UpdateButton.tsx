type UpdateButtonProps = {
    onClick: () => void;
};

function UpdateButton({ onClick }: UpdateButtonProps) {
    return (
        <div
            className="flex w-10 h-10 bg-white ml-4 p-4 rounded-[0.625rem] bg-no-repeat bg-center bg-[url('../src/assets/update-20.svg')] cursor-pointer
            max-sm:self-center max-sm:w-[16.25rem] max-sm:mt-4
            hover:bg-rose-400 hover:bg-[url('../src/assets/update-white-20.svg')]
            dark:bg-stone-900 dark:hover:bg-rose-400"
            onClick={onClick}
        />
    );
}

export default UpdateButton;
