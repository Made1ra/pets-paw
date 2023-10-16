type ContainerProps = {
    children?: React.ReactNode;
    className?: string;
};

function Container({ children, className }: ContainerProps) {
    return (
        <div className={`h-screen flex flex-col items-center justify-start self-center m-auto float-none bg-stone-50
        dark:bg-stone-900
        sm:mx-0 sm:w-full sm:flex-row sm:items-start sm:justify-center sm:float-right
        lg:overscroll-x-none
        ${className}`}>
            {children}
        </div >
    );
}

export default Container;
