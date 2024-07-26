export default function ToggleButton({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="relative h-6 w-11 cursor-pointer">
      <div className="absolute left-0 top-0 h-6 w-11 rounded-[3.125rem] bg-red-100 dark:bg-rose-400 dark:bg-opacity-20" />
      <div className="absolute left-6 top-1 h-4 w-4 rounded-[2.5rem] bg-rose-400 dark:left-1" />
    </div>
  );
}
