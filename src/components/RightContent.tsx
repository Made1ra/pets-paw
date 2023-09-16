type RightContentProps = {
    children?: React.ReactNode;
};

function RightContent({ children }: RightContentProps) {
    return (
        <div className="flex flex-1 flex-col items-end -mr-[8.5rem]">
            {children}
        </div>
    );
}

export default RightContent;
