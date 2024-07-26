"use client";

import { useState } from "react";

export default function UploadPhotoButton({
  isUploading,
  onClick,
}: {
  isUploading: boolean;
  onClick?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`mt-8 flex h-10 w-[10.75rem] items-center justify-center self-center rounded-[0.625rem] text-center max-sm:w-[20.9375rem] ${isHovered ? "bg-red-100" : "bg-rose-400"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {isUploading && (
        <div
          className={`h-4 w-4 rounded-full border-2 ${isHovered ? "border-rose-400" : "border-white"}`}
        />
      )}
      <div
        className={`w-28 text-center font-jost text-xs font-medium uppercase leading-none tracking-widest ${isHovered ? "text-rose-400" : "text-white"}`}
      >
        {isUploading ? "UPLOADING" : "UPLOAD PHOTO"}
      </div>
    </button>
  );
}
