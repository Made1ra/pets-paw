type SearchButtonProps = {
    onClick: () => void;
};

function SearchButton({ onClick }: SearchButtonProps) {
    return (
        <div
            onClick={onClick}
            className={`flex items-start w-10 h-10 mr-4 bg-red-100 rounded-[10px] bg-[url('src/assets/search-20.svg')] bg-no-repeat bg-center`}

        />
    );
}

export default SearchButton;
