import AdminNav from "../../molecules/AdminNav";
import Logo from "../../atoms/Logo";
import StyleAdminHeader from "./style.module.css";

export default function AdminHeader() {
    return (
        <header className={StyleAdminHeader.header}>
            <Logo />
            <AdminNav />
        </header>
    );
}