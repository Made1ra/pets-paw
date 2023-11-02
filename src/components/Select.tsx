type SelectProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children?: React.ReactNode;
    width: string;
    className?: string;
};

function Select({ value, onChange, children, className, width }: SelectProps) {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`w-${width} h-10 bg-stone-50 ml-4 rounded-[0.625rem] cursor-pointer
            hover:border hover:border-red-100
            ${className}`}
        >
            {children}
        </select >
    );
}

export default Select;
