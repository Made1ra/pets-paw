type LinkContainerProps = {
    children?: React.ReactNode;
}

function LinkContainer({ children }: LinkContainerProps) {
    return (
        <div className="w-[50rem] flex flex-row items-center justify-center self-start ml-3
        lg:w-[44.375rem]"
        >
            {children}
        </div>
    );
}

export default LinkContainer;
