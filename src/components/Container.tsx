type ContainerProps = {
    children?: React.ReactNode;
    className?: string;
};

function Container({ children, className }: ContainerProps) {
    return (
        <div className={`w-full max-w-90rem h-auto flex items-center justify-between flex-col float-right bg-stone-50
        dark:bg-stone-900 md:flex-row md:items-start ${className}`}>
            {children}
        </div >
    );
}

export default Container;
