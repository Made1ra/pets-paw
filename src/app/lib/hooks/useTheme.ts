'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
    const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

    const localTheme = isLocalStorageAvailable
        ? localStorage.getItem('app-theme') === 'light'
            ? true
            : localStorage.getItem('app-theme') === 'dark'
                ? false
                : true
        : true;

    const [theme, setTheme] = useState(localTheme);

    useEffect(() => {
        if (isLocalStorageAvailable) {
            document.documentElement.setAttribute('app-theme', theme ? 'light' : 'dark');
            localStorage.setItem('app-theme', theme ? 'light' : 'dark');
        }
    }, [theme, isLocalStorageAvailable]);

    return { theme, setTheme };
}
