export default function Button({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`h-[2.125rem] w-[11.25rem] rounded-[0.625rem] bg-white text-rose-400 hover:bg-rose-400 hover:text-white dark:hover:bg-rose-400 ${className}`}
    >
      {children}
    </button>
  );
}
