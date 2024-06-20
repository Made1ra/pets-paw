export default function Option({
  children,
}: {
  children?: string;
  value?: string;
}) {
  return (
    <option className="text-neutral-400 text-base font-normal leading-normal">
      {children}
    </option>
  );
}
