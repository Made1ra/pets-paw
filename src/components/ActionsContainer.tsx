type ActionsContainer = {
    children?: React.ReactNode;
};

function ActionsContainer({ children }: ActionsContainer) {
    return (
        <div className="flex flex-col items-start justify-start m-2 p-4 w-[710px] h-fit bg-white rounded-[20px]
        dark:bg-stone-50 dark:bg-opacity-10">
            {children}
        </div>
    );
}

export default ActionsContainer;
