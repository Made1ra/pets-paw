type ControlsContainerProps = {
    children?: React.ReactNode;
};

function ControlsContainer({ children }: ControlsContainerProps) {
    return (
        <div className="w-[16.5rem] h-24 flex items-center justify-center bg-white rounded-2xl -mt-12 mb-4
        dark:bg-stone-50 dark:bg-opacity-10">
            {children}
        </div>
    );
}

export default ControlsContainer;
