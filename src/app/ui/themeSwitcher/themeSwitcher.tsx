'use client';

import { useTheme } from '@/app/lib/hooks/useTheme';
import Eye from '@/app/ui/eye';
import ToggleButton from '@/app/ui/themeSwitcher/toggleButton';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    function handleClick() {
        setTheme(!theme);
    };

    return (
        <div className="flex flex-row items-center justify-center ml-32 sm:ml-64">
            <Eye />
            <ToggleButton onClick={handleClick} />
        </div>
    );
}
