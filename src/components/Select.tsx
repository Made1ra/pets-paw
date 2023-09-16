type SelectProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children?: React.ReactNode;
    width: string;
};

function Select({ value, onChange, children, width }: SelectProps) {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`w-${width} h-10 bg-stone-50 ml-4 rounded-[10px] hover:border hover:border-red-100`}
        >
            {children}
        </select >
    );
}

export default Select;
