export default function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="m-5 h-10 w-10 self-end rounded-[0.625rem] bg-white bg-[url('/close-20.svg')] bg-center bg-no-repeat hover:bg-rose-400 hover:bg-[url('/close-white-20.svg')] dark:bg-opacity-5 dark:hover:bg-rose-400 dark:hover:bg-[url('/close-white-20.svg')] sm:m-[1.875rem] lg:m-5"
      onClick={onClick}
    />
  );
}
