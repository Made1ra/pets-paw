export default function UpdateButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="ml-4 flex h-10 w-10 cursor-pointer rounded-[0.625rem] bg-white bg-[url('/update-20.svg')] bg-center bg-no-repeat p-4 hover:bg-rose-400 hover:bg-[url('/update-white-20.svg')] dark:bg-stone-900 dark:hover:bg-rose-400 max-sm:mt-4 max-sm:w-[16.25rem] max-sm:self-center"
      onClick={onClick}
    />
  );
}
