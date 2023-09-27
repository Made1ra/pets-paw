type TextProps = {
    isActive: boolean;
    className?: string;
    children?: string;
};

function TextButton({ isActive, className, children }: TextProps) {
    return (
        <div
            className={`flex items-center justify-center w-36 h-9 rounded-[0.625rem] cursor-pointer
            dark:bg-stone-50 dark:bg-opacity-10 hover:bg-red-100 active:bg-rose-400 ${isActive ? 'bg-rose-400' : 'bg-white'} ${className}`}
        >
            <p
                className={`flex items-center justify-center w-36 h-full text-center text-rose-400 text-xs uppercase font-jost font-medium leading-[1.875rem] tracking-widest hover:text-rose-400 active:text-white ${isActive && 'text-white'}`}
            >
                {children}
            </p>
        </div>
    );
}

export default TextButton;
