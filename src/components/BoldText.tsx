type BoldTextProps = {
    children?: React.ReactNode;
};

function BoldText({ children }: BoldTextProps) {
    return (
        <span className="text-stone-900 text-xl font-medium font-jost">{children}</span>
    );
}

export default BoldText;
