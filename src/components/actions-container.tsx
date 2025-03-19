export default function ActionsContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="ml-4 flex h-fit w-[21rem] flex-col items-start self-start rounded-[1.25rem] bg-white py-4 pl-5 dark:bg-opacity-5 sm:w-[49rem] sm:pl-4 lg:w-[44.375rem]">
      {children}
    </div>
  );
}
