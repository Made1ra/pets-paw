type ActionsContainer = {
    children?: React.ReactNode;
};

function ActionsContainer({ children }: ActionsContainer) {
    return (
        <div className="flex flex-col items-start justify-start m-2 p-4 w-[44.375rem] h-fit bg-white rounded-[1.25rem]
        dark:bg-stone-50 dark:bg-opacity-10">
            {children}
        </div>
    );
}

export default ActionsContainer;
