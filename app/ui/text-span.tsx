export default function TextSpan({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center w-[18.5rem] h-[3.75rem] rounded-[0.625rem] mb-4
        sm:w-[47rem]
        lg:w-[42.25rem]
        dark:bg-white dark:bg-opacity-5 ${className}`}
    >
      <span
        className="bg-stone-50 text-neutral-400 text-xl outline-0 border-none border-0 font-normal ml-4 font-jost leading-normal
            dark:bg-neutral-700 dark:bg-opacity-10"
      >
        {children}
      </span>
    </div>
  );
}
