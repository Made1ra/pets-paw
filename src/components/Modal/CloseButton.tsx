type CloseButtonProps = {
    onClick: () => void;
};

function CloseButton({ onClick }: CloseButtonProps) {
    return (
        <button
            className="self-end m-5 w-10 h-10 rounded-[0.625rem] bg-white bg-center bg-no-repeat bg-[url('../src/assets/close-20.svg')]
            sm:m-[1.875rem]
            lg:m-5
            hover:bg-rose-400 hover:bg-[url('../src/assets/close-white-20.svg')]
            dark:bg-opacity-5
            dark:hover:bg-rose-400 dark:hover:bg-[url('../src/assets/close-white-20.svg')]"
            onClick={onClick}
        />
    );
}

export default CloseButton;
