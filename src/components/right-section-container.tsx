export default function RightSectionContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex w-screen flex-col items-center max-sm:ml-4 max-sm:overflow-x-hidden md:items-end lg:-mr-[8.5rem] lg:ml-72 lg:flex lg:p-0 xl:ml-72 2xl:float-right 2xl:ml-80">
      {children}
    </div>
  );
}
