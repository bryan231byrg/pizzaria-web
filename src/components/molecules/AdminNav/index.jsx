import { useState } from "react";
import ItemNav from "../../atoms/ItemNav";
import StyleAdminNav from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import useAuth from "../../../Contexts/AuthContext.jsx";

export default function AdminNav() {
    const { user, logOut } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function handleLogout() {
        logOut();
        setDropdownOpen(false);
    }

    return (
        <nav className={StyleAdminNav.nav}>
            <ul className={StyleAdminNav.navList}>
                <ItemNav to="/admin">Dashboard</ItemNav>
                <ItemNav to="/admin/produtos">Produtos</ItemNav>
                <ItemNav to="/admin/categorias">Categorias</ItemNav>
                <ItemNav to="/admin/configuracoes">Configurações</ItemNav>
                <ItemNav to="/">Cliente</ItemNav>

                {user && (
                    <li className={StyleAdminNav.userMenu}>
                        <button
                            type="button"
                            className={StyleAdminNav.userButton}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <FontAwesomeIcon icon={faUser} />
                            {user.nome}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={dropdownOpen ? StyleAdminNav.arrowOpen : StyleAdminNav.arrow}
                            />
                        </button>

                        {dropdownOpen && (
                            <div className={StyleAdminNav.dropdown}>
                                <ItemNav to="/perfil">Meu perfil</ItemNav>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className={StyleAdminNav.logoutButton}
                                >
                                    Sair
                                </button>
                            </div>
                        )}
                    </li>
                )}
            </ul>
        </nav>
    );
}