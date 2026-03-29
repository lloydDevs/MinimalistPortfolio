import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
    // 1. Initialize state from LocalStorage or System Preference
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // Fallback to system preference if no saved theme exists
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // 2. Save to LocalStorage
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light'); // 2. Save to LocalStorage
        }
    }, [darkMode]);

    return (
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 p-1 rounded-lg border border-gray-200 dark:border-zinc-700 transition-colors">
            <button
                onClick={() => setDarkMode(false)}
                aria-label="Light Mode"
                className={`p-1.5 rounded-md transition-all ${!darkMode ? 'bg-white shadow-sm text-black' : 'text-gray-400 hover:text-gray-600'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
            </button>
            <button
                onClick={() => setDarkMode(true)}
                aria-label="Dark Mode"
                className={`p-1.5 rounded-md transition-all ${darkMode ? 'bg-zinc-700 shadow-sm text-white' : 'text-gray-400 hover:text-zinc-300'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            </button>
        </div>
    );
};