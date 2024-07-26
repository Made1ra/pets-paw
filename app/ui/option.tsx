export default function Option({
  children,
}: {
  children?: string;
  value?: string;
}) {
  return (
    <option className="text-base font-normal leading-normal text-neutral-400">
      {children}
    </option>
  );
}
