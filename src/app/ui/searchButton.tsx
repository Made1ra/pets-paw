export default function SearchButton({
    onClick
}: {
    onClick: () => void
}) {
    return (
        <div
            onClick={onClick}
            className={`flex items-start w-10 h-10 mr-4 bg-red-100 rounded-[0.625rem] bg-[url('/search-20.svg')] bg-no-repeat bg-center
            dark:bg-rose-400 dark:bg-opacity-20 hover:bg-[url(/search-white-20.svg)] hover:bg-rose-400 dark:hover:bg-rose-400`}
        />
    );
}
