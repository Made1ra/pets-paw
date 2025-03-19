export default function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`mr-4 flex h-10 w-10 items-start rounded-[0.625rem] bg-red-100 bg-[url('/search-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url(/search-white-20.svg)] dark:bg-rose-400 dark:bg-opacity-20 dark:hover:bg-rose-400`}
    />
  );
}
