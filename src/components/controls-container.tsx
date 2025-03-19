export default function ControlsContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="z-10 -mt-8 mb-4 flex h-[3.75rem] w-[11.625rem] items-center justify-center rounded-2xl bg-white dark:bg-stone-50 dark:bg-opacity-10 sm:-mt-12 sm:h-24 sm:w-[16.5rem]">
      {children}
    </div>
  );
}
