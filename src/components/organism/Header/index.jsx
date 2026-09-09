import { useState } from "react";

import ClientNav from "../../molecules/ClientNav";
import AdminNav from "../../molecules/AdminNav";
import CartSidebar from "../CartSideBar";
import PromotionList from "../../molecules/PromotionList";

import Login from "../../../pages/Client/Login";
import Cadastro from "../../../pages/Client/Cadastro";

import useAuth from "../../../Contexts/AuthContext.jsx";

import StyleHeader from "./style.module.css";

function Header() {
    const { user } = useAuth();

    const [cartOpen, setCartOpen] = useState(false);
    const [promotionOpen, setPromotionOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [authTela, setAuthTela] = useState("login");

    function abrirLogin() {
        setAuthTela("login");
        setLoginOpen(true);
    }

    function abrirCadastro() {
        setAuthTela("cadastro");
        setLoginOpen(true);
    }

    function fecharPromocoes() {
        setPromotionOpen(false);
    }

    function fecharLogin() {
        setLoginOpen(false);
    }

    return (
        <>
            {/* =========================
                HEADER / NAVEGAÇÃO
            ========================= */}

            <header className={StyleHeader.header}>
                {user?.tipo === "admin" ? (
                    <AdminNav />
                ) : (
                    <ClientNav
                        onCartClick={() => setCartOpen(true)}
                        onPromotionClick={() => setPromotionOpen(true)}
                        onLoginClick={abrirLogin}
                    />
                )}
            </header>

            {/* =========================
                CARRINHO
            ========================= */}

            <CartSidebar
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
            />

            {/* =========================
                MODAL DE PROMOÇÕES
            ========================= */}

            {promotionOpen && (
                <div
                    className={StyleHeader.overlay}
                    onClick={fecharPromocoes}
                >
                    <div
                        className={StyleHeader.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={StyleHeader.modalHeader}>
                            <div>
                                <h2>Promoções</h2>

                                <p>
                                    Confira nossas ofertas
                                    disponíveis.
                                </p>
                            </div>

                            <button
                                type="button"
                                className={StyleHeader.btnFechar}
                                onClick={fecharPromocoes}
                            >
                                ×
                            </button>
                        </div>

                        <div className={StyleHeader.modalBody}>
                            <PromotionList />
                        </div>
                    </div>
                </div>
            )}

            {/* =========================
                MODAL DE LOGIN / CADASTRO
            ========================= */}

            {loginOpen && (
                <div
                    className={StyleHeader.overlay}
                    onClick={fecharLogin}
                >
                    <div
                        className={`${StyleHeader.modal} ${StyleHeader.authModal}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* CABEÇALHO */}

                        <div className={StyleHeader.modalHeader}>
                            <div>
                                <h2>
                                    {authTela === "login"
                                        ? "Entrar"
                                        : "Criar conta"}
                                </h2>

                                <p>
                                    {authTela === "login"
                                        ? "Entre ou cadastre-se para continuar."
                                        : "Crie sua conta para continuar."}
                                </p>
                            </div>

                            <button
                                type="button"
                                className={StyleHeader.btnFechar}
                                onClick={fecharLogin}
                            >
                                ×
                            </button>
                        </div>

                        {/* CONTEÚDO */}

                        <div className={StyleHeader.modalBody}>
                            {authTela === "login" ? (
                                <Login
                                    onClose={fecharLogin}
                                    onCadastro={abrirCadastro}
                                />
                            ) : (
                                <Cadastro
                                    onClose={fecharLogin}
                                    onLogin={abrirLogin}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;