export default function Select({
  value,
  onChange,
  children,
  className,
  width,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode;
  width: string;
  className?: string;
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-${width} ml-4 h-10 cursor-pointer rounded-[0.625rem] bg-stone-50 hover:border hover:border-red-100 ${className}`}
    >
      {children}
    </select>
  );
}
