type RightSectionContainerProps = {
    children?: React.ReactNode;
};

function RightSectionContainer({ children }: RightSectionContainerProps) {
    return (
        <div className="flex flex-col items-center md:items-end">
            {children}
        </div>
    );
}

export default RightSectionContainer;
