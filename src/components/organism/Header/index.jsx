import ClientNav from "../../molecules/ClientNav";
import AdminNav from "../../molecules/AdminNav";
import Logo from "../../atoms/Logo";
import useAuth from "../../../Contexts/AuthContext";
import StyleClientHeader from "./style.module.css";

function Header() {
    const { user } = useAuth();
    return (
        <header className={StyleClientHeader.header}>
            <Logo />
            {user?.tipo === "admin" ? <AdminNav /> : <ClientNav /> }
        </header>
    );
}

export default Header;