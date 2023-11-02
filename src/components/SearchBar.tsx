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
            className="flex no-underline 
            max-sm:order-last max-sm:w-full max-sm:my-4"
        >
            <div className="flex flex-row mr-4">
                <div className="flex items-center justify-between w-[20.9375rem] h-[3.75rem] mb-4 bg-white rounded-[1.25rem]
                sm:w-[29.5rem] sm:my-4 sm:mx-2
                lg:w-[29.25rem] lg:ml-4
                dark:bg-opacity-5
                hover:border-2 hover:border-red-100
                active:border-2 active:border-rose-400">
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
