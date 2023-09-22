type ActionsContainer = {
    children?: React.ReactNode;
};

function ActionsContainer({ children }: ActionsContainer) {
    return (
        <div className="flex flex-col items-start justify-start m-2 p-4 w-[710px] h-fit bg-white rounded-[20px]">
            {children}
        </div>
    );
}

export default ActionsContainer;
