export default function ToggleButton({
    onClick
}: {
    onClick: () => void
}) {
    return (
        <div
            onClick={onClick}
            className="w-11 h-6 relative cursor-pointer"
        >
            <div className="w-11 h-6 left-0 top-0 absolute bg-red-100 rounded-[3.125rem] dark:bg-rose-400 dark:bg-opacity-20" />
            <div className="w-4 h-4  left-6 top-1 absolute bg-rose-400 rounded-[2.5rem] dark:left-1" />
        </div>
    );
}
