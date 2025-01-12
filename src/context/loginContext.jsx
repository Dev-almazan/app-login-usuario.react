import { useState, createContext } from 'react';



export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        data: null,
        logged: false
    });

    // Función para iniciar sesión
    const login = (userData) => {
        setUser({
            data: userData,
            logged: true
        });
    };

    // Función para cerrar sesión
    const logout = () => {
        
        setUser({
            data: null,
            logged: false
        });
   
    };

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};




