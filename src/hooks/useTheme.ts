import { useState, useEffect } from 'react';

function useTheme() {
    const localTheme = localStorage.getItem('app-theme') === 'light'
        ? true
        : localStorage.getItem('app-theme') === 'dark'
            ? false
            : true;

    const [theme, setTheme] = useState(localTheme);

    useEffect(() => {
        document.documentElement.setAttribute('app-theme', theme ? 'light' : 'dark');
        localStorage.setItem('app-theme', theme ? 'light' : 'dark');
    }, [theme]);

    return { theme, setTheme };
}

export default useTheme;
