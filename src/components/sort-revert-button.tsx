export default function SortRevertButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="ml-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-[0.625rem] bg-stone-50 bg-[url('/sort-revert-20.svg')] bg-center bg-no-repeat hover:border-2 hover:border-red-100 hover:bg-[url('/sort-revert-color-20.svg')] dark:bg-white dark:bg-opacity-5 lg:ml-4"
    />
  );
}
