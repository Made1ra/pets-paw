export default function Label({ children }: { children?: React.ReactNode }) {
  return (
    <label className="ml-4 w-28 font-jost text-[0.625rem] font-medium uppercase leading-[1.125rem] text-neutral-400">
      {children}
    </label>
  );
}
