import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProviderCustom({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext);
