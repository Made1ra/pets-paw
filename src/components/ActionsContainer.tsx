type ActionsContainer = {
    children?: React.ReactNode;
};

function ActionsContainer({ children }: ActionsContainer) {
    return (
        <div className="flex flex-col items-start self-start py-4 ml-4 pl-4 w-[49rem] h-fit bg-white rounded-[1.25rem]
        dark:bg-opacity-5
        lg:w-[44.375rem]"
        >
            {children}
        </div>
    );
}

export default ActionsContainer;
