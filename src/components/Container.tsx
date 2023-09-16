type ContainerProps = {
    children?: React.ReactNode;
};

function Container({ children }: ContainerProps) {
    return (
        <div className="w-full max-w-90rem h-auto flex items-center justify-between flex-col float-right md:flex-row md:items-start">
            {children}
        </div>
    );
}

export default Container;
