import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemNav from "../../atoms/ItemNav";
import StyleAdminNav from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faUser,faChevronDown} from "@fortawesome/free-solid-svg-icons";

import useAuth from "../../../Contexts/AuthContext.jsx";

export default function AdminNav() {
    const { user, logOut } = useAuth();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();

    function handleLogout() {
        logOut();
        setDropdownOpen(false);
        navigate("/", { replace: true });
    }

    return (
        <nav className={StyleAdminNav.nav}>
            <ul className={StyleAdminNav.navList}>

                <ItemNav to="/admin">
                    Dashboard
                </ItemNav>

                <ItemNav to="/admin/produtos">
                    Produtos
                </ItemNav>

                <ItemNav to="/admin/categorias">
                    Categorias
                </ItemNav>

                <ItemNav to="/admin/configuracoes">
                    Configurações
                </ItemNav>

                {user && (
                    <li className={StyleAdminNav.userMenu}>

                        <button
                            type="button"
                            className={StyleAdminNav.userButton}
                            onClick={() =>
                                setDropdownOpen(!dropdownOpen)
                            }
                        >
                            <FontAwesomeIcon icon={faUser} />

                            {user.nome}

                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={
                                    dropdownOpen
                                        ? StyleAdminNav.arrowOpen
                                        : StyleAdminNav.arrow
                                }
                            />
                        </button>

                        {dropdownOpen && (
                            <div className={StyleAdminNav.dropdown}>

                                <Link
                                    to="/perfil"
                                    className={StyleAdminNav.dropdownLink}
                                    onClick={() =>
                                        setDropdownOpen(false)
                                    }
                                >
                                    <FontAwesomeIcon icon={faUser} />
                                    Meu perfil
                                </Link>

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
