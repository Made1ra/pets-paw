export default function NavigationContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-row flex-wrap items-center mb-5">{children}</div>
  );
}
