import { useState, createContext } from 'react';

export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        user: null,
        logged: false
    });

    // Función para iniciar sesión
    const login = (userData) => {
        setUser({
            user: userData,
            logged: true
        });
        localStorage.setItem(
            'user',
            JSON.stringify({
                user: userData,
                logged: true
            })
        ); //guardamos valor en memoria para evitar que se pierda la sesion al recargar pagina
    };

    // Función para cerrar sesión
    const logout = () => {
        setUser({
            user: null,
            logged: false
        });
        localStorage.removeItem('user');
    };

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

