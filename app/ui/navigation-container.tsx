export default function NavigationContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-row flex-wrap items-center">{children}</div>
  );
}
