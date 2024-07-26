export default function TextInput({
  value,
  onChange,
  onKeyDown,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      placeholder="Search for breeds by name"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="w-full pl-4 font-jost text-xl font-normal leading-[1.875rem] text-neutral-400 outline-0 active:text-stone-900 dark:bg-neutral-700 dark:bg-opacity-5"
    />
  );
}
