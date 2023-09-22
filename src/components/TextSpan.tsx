type TextProps = {
    children?: React.ReactNode;
}

function Text({ children }: TextProps) {
    return (
        <div className="w-[640px] h-[60px] rounded-[10px]">
            <span className="bg-stone-50 text-neutral-400 text-xl font-normal font-jost leading-normal">
                {children}
            </span>
        </div>
    );
}

export default Text;
