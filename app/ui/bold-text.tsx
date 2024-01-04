export default function BoldText({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <span className="text-stone-900 text-xl font-medium font-jost dark:text-white">{children}</span>
    );
}
