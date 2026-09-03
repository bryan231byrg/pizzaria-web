import { useState } from "react";
import ItemNav from "../../atoms/ItemNav";
import StyleClientNav from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUtensils,
    faCartShopping,
    faUser,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import useAuth from "../../../Contexts/AuthContext.jsx";

function ClientNav({ onCartClick }) {
    const { user, logOut } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function handleLogout() {
        logOut();
        setDropdownOpen(false);
    }

    return (
        <nav className={StyleClientNav.nav}>
            <ul className={StyleClientNav.navList}>

                <ItemNav to="/">
                    <FontAwesomeIcon icon={faHouse} />
                    Início
                </ItemNav>

                <ItemNav to="/cardapio">
                    <FontAwesomeIcon icon={faUtensils} />
                    Cardápio
                </ItemNav>

                <li>
                    <button
                        type="button"
                        onClick={onCartClick}
                        className={StyleClientNav.cartButton}
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        Carrinho
                    </button>
                </li>

                {user ? (
                    <li className={StyleClientNav.userMenu}>
                        <button
                            type="button"
                            className={StyleClientNav.userButton}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <FontAwesomeIcon icon={faUser} />
                            {user.nome}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={dropdownOpen ? StyleClientNav.arrowOpen : StyleClientNav.arrow}
                            />
                        </button>

                        {dropdownOpen && (
                            <div className={StyleClientNav.dropdown}>
                                <ItemNav to="/perfil">
                                    <FontAwesomeIcon icon={faUser} />
                                    Meu perfil
                                </ItemNav>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className={StyleClientNav.logoutButton}
                                >
                                    Sair
                                </button>
                            </div>
                        )}
                    </li>
                ) : (
                    <ItemNav to="/login">
                        <FontAwesomeIcon icon={faUser} />
                        Entrar/Cadastrar
                    </ItemNav>
                )}

            </ul>
        </nav>
    );
}

export default ClientNav;