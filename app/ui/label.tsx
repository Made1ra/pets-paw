export default function Label({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <label className="w-28 ml-4 text-neutral-400 text-[0.625rem] font-medium font-jost leading-[1.125rem] uppercase">
            {children}
        </label>
    );
}
