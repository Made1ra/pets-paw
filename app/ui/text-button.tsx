export default function TextButton({
  isActive,
  className,
  children,
}: {
  isActive: boolean;
  className?: string;
  children?: string;
}) {
  return (
    <div
      className={`mb-5 ml-24 flex h-9 w-36 cursor-pointer items-center justify-center rounded-[0.625rem] hover:bg-red-100 active:bg-rose-400 dark:bg-opacity-10 dark:hover:bg-red-100 dark:active:bg-rose-400 ${
        isActive
          ? "bg-rose-400 dark:bg-rose-400 dark:bg-opacity-100"
          : "bg-white dark:bg-stone-50 dark:bg-opacity-5"
      } sm:ml-0 lg:mb-0 ${className}`}
    >
      <p
        className={`flex h-full w-36 items-center justify-center text-center font-jost text-xs font-medium uppercase leading-[1.875rem] tracking-widest text-rose-400 hover:text-rose-400 active:text-white dark:hover:text-rose-400 dark:active:text-white ${
          isActive && "text-white"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
