type LinkContainerProps = {
    children?: React.ReactNode;
}

function LinkContainer({ children }: LinkContainerProps) {
    return (
        <div className="w-[50rem] flex flex-wrap items-center justify-start self-start ml-4
        lg:w-[44.375rem]"
        >
            {children}
        </div>
    );
}

export default LinkContainer;
