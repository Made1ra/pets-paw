export default function CloseButton({
    onClick
}: {
    onClick: () => void
}) {
    return (
        <button
            className="self-end m-5 w-10 h-10 rounded-[0.625rem] bg-white bg-center bg-no-repeat bg-[url('/close-20.svg')]
            sm:m-[1.875rem]
            lg:m-5
            hover:bg-rose-400 hover:bg-[url('/close-white-20.svg')]
            dark:bg-opacity-5
            dark:hover:bg-rose-400 dark:hover:bg-[url('/close-white-20.svg')]"
            onClick={onClick}
        />
    );
}
