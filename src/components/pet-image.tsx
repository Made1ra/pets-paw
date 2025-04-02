"use client";

import { useState } from "react";

export default function PetImage({
  url,
  className,
  children,
}: {
  url: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative m-4 flex h-36 w-52 flex-shrink-0 cursor-pointer items-center justify-center rounded-3xl bg-cover bg-center bg-no-repeat max-sm:h-[12.90625rem] max-sm:w-[18.4375rem] ${className}`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundColor: "rgba(211, 211, 211, 0.5)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <>
          <div className="z-10 h-full w-full rounded-3xl bg-rose-400 bg-opacity-60" />
          {children}
        </>
      )}
    </div>
  );
}
