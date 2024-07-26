export default function LargeTextButton({ children }: { children?: string }) {
  return (
    <div className="ml-2 flex h-10 w-[9.125rem] cursor-pointer items-center justify-center rounded-[0.625rem] bg-rose-400 hover:bg-red-100 active:bg-rose-400 sm:w-[9.75rem] lg:ml-4">
      <p className="flex h-full w-full items-center justify-center text-center text-xl font-medium leading-[1.875rem] tracking-widest text-white hover:text-rose-400 active:text-white">
        {children}
      </p>
    </div>
  );
}
