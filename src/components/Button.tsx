type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
};

function Button({ children, className }: ButtonProps) {
    return (
        <button className={`w-[180px] h-[34px] bg-white text-rose-400 rounded-[10px] hover:bg-rose-400 hover:text-white ${className}`}>
            {children}
        </button>
    );
}

export default Button;
