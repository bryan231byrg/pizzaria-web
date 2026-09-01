import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {
        const usuarioSalvo = localStorage.getItem("usuarioLogado");

        if (usuarioSalvo) {
            return JSON.parse(usuarioSalvo);
        }

        return null;
    });

    function login(dataUser) {
        setUser(dataUser);

        localStorage.setItem( "usuarioLogado", JSON.stringify(dataUser));}

    function logOut() {
        setUser(null);

        localStorage.removeItem("usuarioLogado");
    }

    return (
        <AuthContext.Provider value={{ user, login, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}