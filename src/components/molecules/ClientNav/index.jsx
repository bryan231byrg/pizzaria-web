import { useState } from "react";

import { Link } from "react-router-dom";

import ItemNav from "../../atoms/ItemNav";

import StyleClientNav from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faHouse,
    faTag,
    faCartShopping,
    faUser,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import useAuth from "../../../Contexts/AuthContext.jsx";

function ClientNav({
    onCartClick,
    onPromotionClick,
    onLoginClick
}) {
    const { user, logOut } = useAuth();

    const [dropdownOpen, setDropdownOpen] =
        useState(false);

    function handleLogout() {
        setDropdownOpen(false);

        logOut();
    }

    return (
        <nav className={StyleClientNav.nav}>
            <ul className={StyleClientNav.navList}>
                <ItemNav to="/">
                    <FontAwesomeIcon icon={faHouse} />
                    Início
                </ItemNav>

                <li>
                    <button
                        type="button"
                        onClick={onPromotionClick}
                        className={StyleClientNav.navButton}
                    >
                        <FontAwesomeIcon icon={faTag} />
                        Promoções
                    </button>
                </li>

                <li>
                    <button
                        type="button"
                        onClick={onCartClick}
                        className={StyleClientNav.navButton}
                    >
                        <FontAwesomeIcon
                            icon={faCartShopping}
                        />
                        Carrinho
                    </button>
                </li>

                {user ? (
                    <li
                        className={
                            StyleClientNav.userMenu
                        }
                    >
                        <button
                            type="button"
                            className={
                                StyleClientNav.navButton
                            }
                            onClick={() =>
                                setDropdownOpen(
                                    !dropdownOpen
                                )
                            }
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                            />

                            {user.nome}

                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={
                                    dropdownOpen
                                        ? StyleClientNav.arrowOpen
                                        : StyleClientNav.arrow
                                }
                            />
                        </button>

                        {dropdownOpen && (
                            <div
                                className={
                                    StyleClientNav.dropdown
                                }
                            >
                                <Link
                                    to="/perfil"
                                    className={
                                        StyleClientNav.dropdownLink
                                    }
                                    onClick={() =>
                                        setDropdownOpen(
                                            false
                                        )
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faUser}
                                    />

                                    Meu perfil
                                </Link>

                                <button
                                    type="button"
                                    onClick={
                                        handleLogout
                                    }
                                    className={
                                        StyleClientNav.logoutButton
                                    }
                                >
                                    Sair
                                </button>
                            </div>
                        )}
                    </li>
                ) : (
                    <li>
                        <button
                            type="button"
                            onClick={onLoginClick}
                            className={
                                StyleClientNav.navButton
                            }
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                            />

                            Entrar/Cadastrar
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default ClientNav;