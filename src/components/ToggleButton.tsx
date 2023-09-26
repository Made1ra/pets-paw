type ToggleButtonProps = {
    onClick: () => void;
};

function ToggleButton({ onClick }: ToggleButtonProps) {
    return (
        <div
            onClick={onClick}
            className="w-11 h-6 relative cursor-pointer"
        >
            <div className="w-11 h-6 left-0 top-0 absolute bg-red-100 rounded-[50px] dark:bg-rose-400 dark:bg-opacity-20" />
            <div className="w-4 h-4 left-[24px] top-[4px] absolute bg-rose-400 rounded-[40px] dark:left-[4px]" />
        </div>
    );
}

export default ToggleButton;
