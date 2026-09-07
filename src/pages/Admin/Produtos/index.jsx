import { useState } from "react";

import Header from "../../../components/organism/Header";
import Cardapio from "../../Client/Cardapio/";
import ProductForm from "../../../components/organism/ProductForm";
import PromotionForm from "../../../components/organism/PromotionForm";

import StyleProducts from "./style.module.css";

export default function Produtos() {
    const [formProdutoAberto, setFormProdutoAberto] = useState(false);
    const [formPromocaoAberto, setFormPromocaoAberto] = useState(false);

    function abrirProduto() {
        setFormProdutoAberto(true);
        setFormPromocaoAberto(false);
    }

    function abrirPromocao() {
        setFormPromocaoAberto(true);
        setFormProdutoAberto(false);
    }

    function fecharModal() {
        setFormProdutoAberto(false);
        setFormPromocaoAberto(false);
    }

    return (
        <>
            <Header />

            <main className={StyleProducts.main}>
                <div className={StyleProducts.topo}>
                    <div>
                        <h1>Produtos</h1>

                        <p>
                            Gerencie os produtos e promoções do seu cardápio.
                        </p>
                    </div>

                    <div className={StyleProducts.botoes}>
                        <button
                            type="button"
                            className={StyleProducts.btnProduto}
                            onClick={abrirProduto}
                        >
                            + Cadastrar produto
                        </button>

                        <button
                            type="button"
                            className={StyleProducts.btnPromocao}
                            onClick={abrirPromocao}
                        >
                            + Cadastrar promoção
                        </button>
                    </div>
                </div>

                <section className={StyleProducts.cardapio}>
                    <Cardapio />
                </section>
            </main>

            {formProdutoAberto && (
                <div
                    className={StyleProducts.overlay}
                    onClick={fecharModal}
                >
                    <div
                        className={StyleProducts.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={StyleProducts.modalHeader}>
                            <div>
                                <h2>Cadastrar produto</h2>

                                <p>
                                    Adicione um novo produto ao cardápio.
                                </p>
                            </div>

                            <button
                                type="button"
                                className={StyleProducts.btnFechar}
                                onClick={fecharModal}
                            >
                                ×
                            </button>
                        </div>

                        <div className={StyleProducts.modalBody}>
                            <ProductForm onClose={fecharModal} />
                        </div>
                    </div>
                </div>
            )}

            {formPromocaoAberto && (
                <div
                    className={StyleProducts.overlay}
                    onClick={fecharModal}
                >
                    <div
                        className={StyleProducts.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={StyleProducts.modalHeader}>
                            <div>
                                <h2>Cadastrar promoção</h2>

                                <p>
                                    Crie uma nova promoção para seu cardápio.
                                </p>
                            </div>

                            <button
                                type="button"
                                className={StyleProducts.btnFechar}
                                onClick={fecharModal}
                            >
                                ×
                            </button>
                        </div>

                        <div className={StyleProducts.modalBody}>
                            <PromotionForm onClose={fecharModal} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}