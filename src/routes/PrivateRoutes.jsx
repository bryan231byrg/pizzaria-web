import useAuth from "../Contexts/AuthContext.jsx"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute(){
    const { user } = useAuth()

if (user.tipo !== "admin") {
    return <Navigate to="/" replace />;
}


    return <Outlet />
}

export default PrivateRoute