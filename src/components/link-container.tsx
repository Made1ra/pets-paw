export default function LinkContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex w-[50rem] items-center justify-start self-start max-sm:ml-4 max-sm:flex-wrap lg:w-[44.375rem]">
      {children}
    </div>
  );
}
