"use client";

import { useState } from "react";

export default function UploadButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex h-10 cursor-pointer items-center justify-center rounded-[0.625rem] bg-red-100 hover:bg-rose-400 dark:bg-rose-400 dark:bg-opacity-20 dark:hover:bg-rose-400 max-sm:order-last max-sm:mt-4 max-sm:w-[18.4375rem] sm:ml-[25.25rem] sm:w-[8.9375rem] lg:ml-[20.5rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className={`mr-2 h-4 w-4 bg-center bg-no-repeat ${
          isHovered
            ? 'bg-[url("/upload-white-16.svg")]'
            : 'bg-[url("/upload-16.svg")]'
        }`}
      />
      <div
        className={`w-[3.5625rem] text-center font-jost text-xs font-medium leading-none tracking-widest text-rose-400 ${
          isHovered && "text-white"
        }`}
      >
        UPLOAD
      </div>
    </div>
  );
}
