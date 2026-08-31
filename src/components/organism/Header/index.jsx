import { useState } from "react";

import ClientNav from "../../molecules/ClientNav";
import AdminNav from "../../molecules/AdminNav";
import Logo from "../../atoms/Logo";

import CartSidebar from "../CartSideBar";

import useAuth from "../../../Contexts/AuthContext";

import StyleHeader from "./style.module.css";

function Header() {

    const { user } = useAuth();

    const [cartOpen, setCartOpen] = useState(false);

    return (

        <>
            <header className={StyleHeader.header}>

                <Logo />

                {user?.tipo === "admin" ? (

                    <AdminNav />

                ) : (

                    <ClientNav
                        onCartClick={() => setCartOpen(true)}
                    />

                )}

            </header>

            <CartSidebar
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
            />

        </>

    );
}

export default Header;