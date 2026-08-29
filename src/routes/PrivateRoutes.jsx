import useAuth from "../Contexts/AuthContext.jsx"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute(){
    const { user } = useAuth()

    if(!user){
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default PrivateRoute