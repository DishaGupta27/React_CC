import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleAuth = () => setIsLoggedIn(prev => !prev);

    return (
        <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
