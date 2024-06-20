"use client";

import { useState } from "react";

export default function UploadButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center h-10 bg-red-100 rounded-[0.625rem] cursor-pointer
            max-sm:w-[18.4375rem] max-sm:mt-4 max-sm:order-last
            sm:ml-[25.25rem] sm:w-[8.9375rem]
            lg:ml-[20.5rem]
            dark:bg-rose-400 dark:bg-opacity-20 hover:bg-rose-400 dark:hover:bg-rose-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`w-4 h-4 mr-2 bg-no-repeat bg-center ${
          isHovered
            ? 'bg-[url("/upload-white-16.svg")]'
            : 'bg-[url("/upload-16.svg")]'
        }`}
      />
      <div
        className={`w-[3.5625rem] text-center text-rose-400 text-xs font-medium font-jost leading-none tracking-widest ${
          isHovered && "text-white"
        }`}
      >
        UPLOAD
      </div>
    </div>
  );
}
