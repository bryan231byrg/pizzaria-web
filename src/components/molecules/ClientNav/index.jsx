import ItemNav from "../../atoms/ItemNav";

import StyleClientNav from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faHouse,
    faUtensils,
    faCartShopping,
    faUser
} from "@fortawesome/free-solid-svg-icons";

function ClientNav({ onCartClick }) {

    return (

        <nav className={StyleClientNav.nav}>

            <ul className={StyleClientNav.navList}>

                <ItemNav to={"/"}>
                    <FontAwesomeIcon icon={faHouse} />
                    Início
                </ItemNav>

                <ItemNav to={"/cardapio"}>
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
                    </button>
                </li>

                <ItemNav to={"/login"}>
                    <FontAwesomeIcon icon={faUser} />
                    Entrar/Cadastrar
                </ItemNav>

            </ul>

        </nav>
    );
}

export default ClientNav;