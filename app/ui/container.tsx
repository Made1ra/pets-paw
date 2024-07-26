export default function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`float-none m-auto flex min-h-screen flex-col items-center justify-start self-center bg-stone-50 dark:bg-stone-900 sm:float-right sm:mx-0 sm:w-full sm:flex-row sm:items-start sm:justify-center lg:overscroll-x-none ${className}`}
    >
      {children}
    </div>
  );
}
