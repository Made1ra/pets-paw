type RightContentProps = {
    children?: React.ReactNode;
};

function RightContent({ children }: RightContentProps) {
    return (
        <div className="hidden flex-1 flex-col items-end lg:flex lg:-mr-[8.5rem]">
            {children}
        </div>
    );
}

export default RightContent;
