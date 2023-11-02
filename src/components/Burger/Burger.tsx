import { useState } from 'react';
import Menu from '../Menu/Menu';

type BurgerProps = {
    isActive: number;
}

function Burger({ isActive }: BurgerProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openMenu = () => {
        setIsModalOpen(true);
        const root = document.getElementById('root');
        if (root) {
            root.style.overflow = 'hidden';
        }
    };

    const closeMenu = () => {
        setIsModalOpen(false);
        const root = document.getElementById('root');
        if (root) {
            root.style.overflow = 'auto';
        }
    };

    return (
        <>
            <div
                className="w-[3.75rem] h-[3.75rem] bg-white bg-center bg-no-repeat bg-[url('../src/assets/burger.svg')] rounded-[1.25rem] mr-14
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

export default Burger;
