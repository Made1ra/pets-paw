export default function LargeTextButton({ children }: { children?: string }) {
  return (
    <div
      className="flex items-center justify-center w-[9.125rem] h-10 ml-2 bg-rose-400 rounded-[0.625rem] cursor-pointer
        sm:w-[9.75rem]
        lg:ml-4
        hover:bg-red-100
        active:bg-rose-400"
    >
      <p
        className="flex items-center justify-center w-full h-full text-center text-white text-xl font-medium leading-[1.875rem] tracking-widest
            hover:text-rose-400 
            active:text-white"
      >
        {children}
      </p>
    </div>
  );
}
