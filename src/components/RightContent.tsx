type RightContentProps = {
    children?: React.ReactNode;
};

function RightContent({ children }: RightContentProps) {
    return (
        <div className="hidden flex-1 flex-col items-end -mr-[8.5rem]  lg:flex">
            {children}
        </div>
    );
}

export default RightContent;
