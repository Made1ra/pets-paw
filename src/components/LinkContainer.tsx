type LinkContainerProps = {
    children?: React.ReactNode;
}

function LinkContainer({ children }: LinkContainerProps) {
    return (
        <div className="flex flex-row">
            {children}
        </div>
    );
}

export default LinkContainer;
