type LabelProps = {
    children?: React.ReactNode;
};

function Label({ children }: LabelProps) {
    return (
        <label className="w-28 ml-4 text-neutral-400 text-[0.625rem] font-medium font-jost leading-[1.125rem] uppercase">
            {children}
        </label>
    );
}

export default Label;
