type ControlsContainerProps = {
    children?: React.ReactNode;
};

function ControlsContainer({ children }: ControlsContainerProps) {
    return (
        <div className="w-[11.625rem] h-[3.75rem] flex items-center justify-center bg-white rounded-2xl -mt-8 mb-4
        sm:w-[16.5rem] sm:h-24 sm:-mt-12
        dark:bg-stone-50 dark:bg-opacity-10">
            {children}
        </div>
    );
}

export default ControlsContainer;
