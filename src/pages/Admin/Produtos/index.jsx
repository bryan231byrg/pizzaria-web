import { useEffect, useState } from "react";

import Header from "../../../components/organism/Header";

import Cardapio from "../../Client/Cardapio/";

import ProductForm from "../../../components/organism/ProductForm";

import PromotionForm from "../../../components/organism/PromotionForm";

import EditarProduto from "../EditarProduto/";

import StyleProducts from "./style.module.css";

export default function Produtos() {
    const [products, setProducts] = useState([]);

    const [formProdutoAberto, setFormProdutoAberto] =
        useState(false);

    const [formPromocaoAberto, setFormPromocaoAberto] =
        useState(false);

    const [produtoEditando, setProdutoEditando] =
        useState(null);

    useEffect(() => {
        const productsSalvos =
            localStorage.getItem("products");

        if (productsSalvos) {
            setProducts(JSON.parse(productsSalvos));
        }
    }, []);

    function abrirProduto() {
        setFormProdutoAberto(true);
        setFormPromocaoAberto(false);
        setProdutoEditando(null);
    }

    function abrirPromocao() {
        setFormPromocaoAberto(true);
        setFormProdutoAberto(false);
        setProdutoEditando(null);
    }

    function fecharModal() {
        setFormProdutoAberto(false);
        setFormPromocaoAberto(false);
        setProdutoEditando(null);
    }

    return (
        <>
            <Header />

            <main className={StyleProducts.main}>
                <div className={StyleProducts.topo}>
                    <div>
                        <h1>
                            Produtos
                        </h1>

                        <p>
                            Gerencie os produtos e promoções
                            do seu cardápio.
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
                    <Cardapio
                        products={products}
                        setProducts={setProducts}
                        onEdit={setProdutoEditando}
                    />
                </section>
            </main>

            {/* CADASTRAR PRODUTO */}
            {formProdutoAberto && (
                <div
                    className={StyleProducts.overlay}
                    onClick={fecharModal}
                >
                    <div
                        className={StyleProducts.modal}
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        <div
                            className={
                                StyleProducts.modalHeader
                            }
                        >
                            <div>
                                <h2>
                                    Cadastrar produto
                                </h2>

                                <p>
                                    Adicione um novo produto
                                    ao cardápio.
                                </p>
                            </div>

                            <button
                                type="button"
                                className={
                                    StyleProducts.btnFechar
                                }
                                onClick={fecharModal}
                            >
                                ×
                            </button>
                        </div>

                        <div
                            className={
                                StyleProducts.modalBody
                            }
                        >
                            <ProductForm
                                onClose={fecharModal}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* CADASTRAR PROMOÇÃO */}
            {formPromocaoAberto && (
                <div
                    className={StyleProducts.overlay}
                    onClick={fecharModal}
                >
                    <div
                        className={StyleProducts.modal}
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        <div
                            className={
                                StyleProducts.modalHeader
                            }
                        >
                            <div>
                                <h2>
                                    Cadastrar promoção
                                </h2>

                                <p>
                                    Crie uma nova promoção
                                    para seu cardápio.
                                </p>
                            </div>

                            <button
                                type="button"
                                className={
                                    StyleProducts.btnFechar
                                }
                                onClick={fecharModal}
                            >
                                ×
                            </button>
                        </div>

                        <div
                            className={
                                StyleProducts.modalBody
                            }
                        >
                            <PromotionForm
                                onClose={fecharModal}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* EDITAR PRODUTO */}
            {produtoEditando && (
                <div
                    className={StyleProducts.overlay}
                    onClick={() =>
                        setProdutoEditando(null)
                    }
                >
                    <div
                        className={StyleProducts.modal}
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        <EditarProduto
                            produto={produtoEditando}
                            setProducts={setProducts}
                            onClose={() =>
                                setProdutoEditando(null)
                            }
                        />
                    </div>
                </div>
            )}
        </>
    );
}