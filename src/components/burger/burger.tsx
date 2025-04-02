"use client";

import { useState } from "react";
import Menu from "@/components/menu/menu";

export default function Burger({ isActive }: { isActive: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMenu = () => {
    setIsModalOpen(true);
    const root = document.getElementById("root");
    if (root) {
      root.style.overflow = "hidden";
    }
  };

  const closeMenu = () => {
    setIsModalOpen(false);
    const root = document.getElementById("root");
    if (root) {
      root.style.overflow = "auto";
    }
  };

  return (
    <>
      <div
        className="mr-14 h-[3.75rem] w-[3.75rem] rounded-[1.25rem] bg-white bg-[url('/burger.svg')] bg-center bg-no-repeat dark:bg-opacity-5 sm:mr-0 lg:hidden"
        onClick={openMenu}
      />
      <Menu isActive={isActive} isOpen={isModalOpen} onClose={closeMenu} />
    </>
  );
}
