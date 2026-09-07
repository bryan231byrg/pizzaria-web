import { useState } from "react";

import ClientNav from "../../molecules/ClientNav";
import AdminNav from "../../molecules/AdminNav";

import CartSidebar from "../CartSideBar";
import PromotionList from "../../molecules/PromotionList";

import useAuth from "../../../Contexts/AuthContext.jsx";

import StyleHeader from "./style.module.css";

function Header() {
    const { user } = useAuth();

    const [cartOpen, setCartOpen] = useState(false);
    const [promotionOpen, setPromotionOpen] = useState(false);

    function fecharPromocoes() {
        setPromotionOpen(false);
    }

    return (
        <>
            <header className={StyleHeader.header}>
                {user?.tipo === "admin" ? (
                    <AdminNav />
                ) : (
                    <ClientNav
                        onCartClick={() =>
                            setCartOpen(true)
                        }
                        onPromotionClick={() =>
                            setPromotionOpen(true)
                        }
                    />
                )}
            </header>

            <CartSidebar
                isOpen={cartOpen}
                onClose={() =>
                    setCartOpen(false)
                }
            />

            {promotionOpen && (
                <div
                    className={StyleHeader.overlay}
                    onClick={fecharPromocoes}
                >
                    <div
                        className={StyleHeader.modal}
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        <div
                            className={
                                StyleHeader.modalHeader
                            }
                        >
                            <div>
                                <h2>
                                    Promoções
                                </h2>

                                <p>
                                    Confira nossas ofertas disponíveis.
                                </p>
                            </div>

                            <button
                                type="button"
                                className={
                                    StyleHeader.btnFechar
                                }
                                onClick={
                                    fecharPromocoes
                                }
                            >
                                ×
                            </button>
                        </div>

                        <div
                            className={
                                StyleHeader.modalBody
                            }
                        >
                            <PromotionList />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;