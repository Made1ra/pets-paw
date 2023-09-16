type TextProps = {
    children?: string;
    isActive: boolean;
};

function TextButton({ children, isActive }: TextProps) {
    return (
        <div
            className={`flex items-center justify-center w-[138px] h-9 rounded-[10px] hover:bg-red-100 active:bg-rose-400 ${isActive ? 'bg-rose-400' : 'bg-white'}`}
        >
            <p
                className={`flex items-center justify-center w-[138px] h-full text-center text-rose-400 text-xs uppercase font-jost font-medium leading-none tracking-[0.125em] hover:text-rose-400 active:text-white ${isActive && 'text-white'}`}
            >
                {children}
            </p>
        </div>
    );
}

export default TextButton;
