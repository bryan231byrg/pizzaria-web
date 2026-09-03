import { useState } from "react";

import ClientNav from "../../molecules/ClientNav";
import AdminNav from "../../molecules/AdminNav";
import CartSidebar from "../CartSideBar";

import useAuth from "../../../Contexts/AuthContext";
import StyleHeader from "./style.module.css";

function Header() {

    const { user } = useAuth();
    
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <header className={StyleHeader.header}>
                {user?.tipo === "admin" ? (
                    <AdminNav />
                ) : (
                    <ClientNav onCartClick={() => setCartOpen(true)}/> )}

            </header>
            <CartSidebar
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
            />
        </>
    );
}

export default Header;