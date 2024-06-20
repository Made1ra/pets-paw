export default function ActionsContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-start self-start py-4 ml-4 pl-5 w-[21rem] h-fit bg-white rounded-[1.25rem]
        sm:w-[49rem] sm:pl-4
        dark:bg-opacity-5
        lg:w-[44.375rem]"
    >
      {children}
    </div>
  );
}
