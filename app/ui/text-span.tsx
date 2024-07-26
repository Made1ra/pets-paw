export default function TextSpan({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mb-4 flex h-[3.75rem] w-[18.5rem] items-center rounded-[0.625rem] dark:bg-white dark:bg-opacity-5 sm:w-[47rem] lg:w-[42.25rem] ${className}`}
    >
      <span className="ml-4 border-0 border-none bg-stone-50 font-jost text-xl font-normal leading-normal text-neutral-400 outline-0 dark:bg-neutral-700 dark:bg-opacity-10">
        {children}
      </span>
    </div>
  );
}
