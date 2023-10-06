type LabelProps = {
    children?: React.ReactNode;
};

function Label({ children }: LabelProps) {
    return (
        <label className="w-28 ml-4 text-neutral-400 text-[10px] font-medium font-jost leading-[18px] uppercase">
            {children}
        </label>
    );
}

export default Label;
