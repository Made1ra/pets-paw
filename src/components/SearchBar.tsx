import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import SearchButton from './SearchButton';

type SearchBarProps = {
    onSearch?: (searchTerm: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <Link
            to="/search"
            className="no-underline"
        >
            <div className="flex flex-row mr-4">
                <div className="flex items-center justify-between w-[470px] h-[60px] my-4 mx-2 bg-white rounded-[20px]
                dark:bg-stone-50 dark:bg-opacity-10 hover:border-2 hover:border-red-100 active:border-2 active:border-rose-400">
                    <TextInput
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <SearchButton onClick={() => handleSearch()} />
                </div>
            </div>
        </Link >
    );
}

export default SearchBar;
