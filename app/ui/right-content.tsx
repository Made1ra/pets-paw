export default function RightContent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="hidden flex-1 flex-col items-end lg:-mr-[8.5rem] lg:flex">
      {children}
    </div>
  );
}
