"use client";

import { useState } from "react";
import Link from "next/link";
import TextInput from "@/components/text-input";
import SearchButton from "@/components/search-button";

export default function SearchBar({
  onSearch,
}: {
  onSearch?: (searchTerm: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    if (onSearch) {
      onSearch(searchTerm);
    }
  }

  return (
    <Link
      href="/search"
      className="flex max-sm:order-last max-sm:my-4 max-sm:w-full"
    >
      <div className="mr-4 flex flex-row">
        <div className="mb-4 flex h-[3.75rem] w-[20.9375rem] items-center justify-between rounded-[1.25rem] bg-white hover:border-2 hover:border-red-100 active:border-2 active:border-rose-400 dark:bg-opacity-5 sm:mx-2 sm:my-4 sm:w-[29.5rem] lg:ml-4 lg:w-[29.25rem]">
          <TextInput
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <SearchButton onClick={() => handleSearch()} />
        </div>
      </div>
    </Link>
  );
}
