export default function BoldText({ children }: { children?: React.ReactNode }) {
  return (
    <span className="font-jost text-xl font-medium text-stone-900 dark:text-white">
      {children}
    </span>
  );
}
