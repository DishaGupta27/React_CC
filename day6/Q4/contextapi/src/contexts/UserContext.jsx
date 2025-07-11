import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const initialUser = {
    name: 'Disha',
    email: 'disha@example.com'
};

export function UserProvider({ children }) {
    const [user, setUser] = useState(initialUser);

    const updateUser = (newData) => {
        setUser(prev => ({ ...prev, ...newData }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
