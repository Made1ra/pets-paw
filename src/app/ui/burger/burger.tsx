'use client';

import { useState } from 'react';
import Menu from '@/app/ui/menu/menu';

export default function Burger({
    isActive
}: {
    isActive: number
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openMenu() {
        setIsModalOpen(true);
        const root = document.getElementById('root');
        if (root) {
            root.style.overflow = 'hidden';
        }
    };

    function closeMenu() {
        setIsModalOpen(false);
        const root = document.getElementById('root');
        if (root) {
            root.style.overflow = 'auto';
        }
    };

    return (
        <>
            <div
                className="w-[3.75rem] h-[3.75rem] bg-white bg-center bg-no-repeat bg-[url('/burger.svg')] rounded-[1.25rem] mr-14
                sm:mr-0
                lg:hidden
                dark:bg-opacity-5"
                onClick={() => openMenu()}
            />
            <Menu
                isActive={isActive}
                isOpen={isModalOpen}
                onClose={() => closeMenu()}
            />
        </>
    );
}
