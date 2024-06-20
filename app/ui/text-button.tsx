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
      className={`flex items-center justify-center w-36 h-9 ml-24 mb-5 rounded-[0.625rem] cursor-pointer
            dark:bg-opacity-10 
            hover:bg-red-100 
            active:bg-rose-400
            dark:hover:bg-red-100
            dark:active:bg-rose-400 ${
              isActive
                ? "bg-rose-400 dark:bg-rose-400 dark:bg-opacity-100"
                : "bg-white dark:bg-stone-50 dark:bg-opacity-5"
            }
            sm:ml-0
            lg:mb-0
            ${className}`}
    >
      <p
        className={`flex items-center justify-center w-36 h-full text-center text-rose-400 text-xs uppercase font-jost font-medium leading-[1.875rem] tracking-widest
                hover:text-rose-400 dark:hover:text-rose-400 active:text-white dark:active:text-white ${
                  isActive && "text-white"
                }`}
      >
        {children}
      </p>
    </div>
  );
}
