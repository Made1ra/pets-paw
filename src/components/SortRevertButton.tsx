import { SortButtonProps } from './SortButton';

function SortRevertButton({ onClick }: SortButtonProps) {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center bg-center bg-no-repeat cursor-pointer ml-2 w-10 h-10 bg-stone-50 rounded-[0.625rem] bg-[url('../src/assets/sort-revert-20.svg')]
            hover:border-2 hover:border-red-100 dark:bg-white dark:bg-opacity-5 hover:bg-[url('../src/assets/sort-revert-color-20.svg')]" />
    );
}

export default SortRevertButton;
