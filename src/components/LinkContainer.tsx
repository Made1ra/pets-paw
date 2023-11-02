type LinkContainerProps = {
    children?: React.ReactNode;
}

function LinkContainer({ children }: LinkContainerProps) {
    return (
        <div className="w-[50rem] flex items-center justify-start self-start
        max-sm:flex-wrap max-sm:ml-4
        lg:w-[44.375rem]"
        >
            {children}
        </div>
    );
}

export default LinkContainer;
