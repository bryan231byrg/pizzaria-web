import { useState, useContext, createContext } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }){
    const [user, setUser] = useState(null)

    function login(dataUser){
        setUser(dataUser)
    }

    function logOut(){
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){
    return useContext(AuthContext)
}