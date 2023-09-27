type ControlsContainerProps = {
    children?: React.ReactNode;
};

function ControlsContainer({ children }: ControlsContainerProps) {
    return (
        <div className="flex items-center justify-center bg-white rounded-2xl -mt-14
        dark:bg-stone-50 dark:bg-opacity-10">
            {children}
        </div>
    );
}

export default ControlsContainer;
