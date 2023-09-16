type TextProps = {
    children?: React.ReactNode;
}

function Text({ children }: TextProps) {
    return (
        <div className="w-[640px] h-[60px] bg-stone-50 rounded-[10px]">
            <span className="text-neutral-400 text-lg font-normal leading-normal">
                {children}
            </span>
        </div>
    );
}

export default Text;
