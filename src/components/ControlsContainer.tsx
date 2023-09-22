type ControlsContainerProps = {
    children?: React.ReactNode;
};

function ControlsContainer({ children }: ControlsContainerProps) {
    return (
        <div className="flex items-center justify-center bg-white rounded-2xl -mt-14">
            {children}
        </div>
    );
}

export default ControlsContainer;
