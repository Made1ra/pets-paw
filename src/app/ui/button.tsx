export default function Button({
    children,
    className
}: {
    children?: React.ReactNode
    className?: string
}) {
    return (
        <button className={`w-[11.25rem] h-[2.125rem] bg-white text-rose-400 rounded-[0.625rem] 
        hover:bg-rose-400 hover:text-white 
        dark:hover:bg-rose-400 
        ${className}`}>
            {children}
        </button>
    );
}
