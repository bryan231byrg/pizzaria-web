import StyleProductItem from "./style.module.css";

import { useNavigate } from "react-router-dom";

import useAuth from "../../../Contexts/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faTrash,
    faPen,
    faCartPlus,
    faBolt,
    faTag
} from "@fortawesome/free-solid-svg-icons";

export default function ProductItem({
    product,
    products = [],
    setProducts,
    promocao
}) {
    const navigate = useNavigate();

    const { user } = useAuth();

    const hoje = new Date()
        .toISOString()
        .split("T")[0];

    const promocaoAtiva =
        promocao &&
        promocao.ativa === true &&
        promocao.dataInicio &&
        promocao.dataFim &&
        hoje >= promocao.dataInicio &&
        hoje <= promocao.dataFim;

    const precoFinal = promocaoAtiva
        ? Number(promocao.valor)
        : Number(product.preco);


    /* =========================
       REMOVER PRODUTO
    ========================= */

    const deleteProduct = () => {
        const productFiltered = products.filter(
            (p) => p.id !== product.id
        );

        setProducts(productFiltered);

        localStorage.setItem(
            "products",
            JSON.stringify(productFiltered)
        );

        const promocoes =
            JSON.parse(localStorage.getItem("promocoes")) || [];

        const promocoesFiltradas = promocoes.filter(
            (p) =>
                Number(p.productId) !== Number(product.id)
        );

        localStorage.setItem(
            "promocoes",
            JSON.stringify(promocoesFiltradas)
        );
    };


    /* =========================
       REMOVER PROMOÇÃO
    ========================= */

    const removePromotion = () => {
        const promocoes =
            JSON.parse(localStorage.getItem("promocoes")) || [];

        const promocoesAtualizadas = promocoes.filter(
            (p) =>
                Number(p.productId) !== Number(product.id)
        );

        localStorage.setItem(
            "promocoes",
            JSON.stringify(promocoesAtualizadas)
        );

        window.location.reload();
    };


    /* =========================
       EDITAR PRODUTO
    ========================= */

    const editProduct = () => {
        navigate(
            `/admin/produtos/${product.id}/editar`
        );
    };


    /* =========================
       ADICIONAR AO CARRINHO
    ========================= */

    const addToCarrinho = () => {
        const carrinho =
            JSON.parse(localStorage.getItem("carrinho")) || [];

        const produtoExiste = carrinho.find(
            (item) => item.id === product.id
        );

        let novoCarrinho;

        if (produtoExiste) {
            novoCarrinho = carrinho.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        precoAplicado: precoFinal,
                        quantidade:
                            item.quantidade + 1
                    }
                    : item
            );
        } else {
            novoCarrinho = [
                ...carrinho,
                {
                    ...product,
                    precoAplicado: precoFinal,
                    quantidade: 1
                }
            ];
        }

        localStorage.setItem(
            "carrinho",
            JSON.stringify(novoCarrinho)
        );
    };


    /* =========================
       COMPRAR AGORA
    ========================= */

    const buyNow = () => {
        console.log(
            "Comprar agora:",
            product
        );
    };


    return (
        <article
            className={StyleProductItem.card}
        >
            {promocaoAtiva && (
                <span
                    className={
                        StyleProductItem.badgePromocao
                    }
                >
                    <FontAwesomeIcon icon={faTag} />

                    Promoção
                </span>
            )}

            <img
                src={product.file}
                alt={product.nome}
                className={StyleProductItem.image}
            />

            <div
                className={
                    StyleProductItem.info
                }
            >
                <h2>
                    {product.nome}
                </h2>

                {promocaoAtiva ? (
                    <div
                        className={
                            StyleProductItem.promocao
                        }
                    >
                        <span
                            className={
                                StyleProductItem.precoAntigo
                            }
                        >
                            R$ {Number(product.preco)
                                .toFixed(2)
                                .replace(".", ",")}
                        </span>

                        <p
                            className={
                                StyleProductItem.precoPromocional
                            }
                        >
                            R$ {precoFinal
                                .toFixed(2)
                                .replace(".", ",")}
                        </p>
                    </div>
                ) : (
                    <p>
                        R$ {Number(product.preco)
                            .toFixed(2)
                            .replace(".", ",")}
                    </p>
                )}
            </div>


            {/* =========================
                ÁREA ADMIN
            ========================= */}

            {user?.tipo === "admin" ? (
                <div
                    className={
                        StyleProductItem.actions
                    }
                >
                    <button
                        type="button"
                        onClick={editProduct}
                        className={`${StyleProductItem.btnItem} ${StyleProductItem.btnEdit}`}
                    >
                        <FontAwesomeIcon icon={faPen} />

                        Editar
                    </button>

                    <button
                        type="button"
                        onClick={deleteProduct}
                        className={`${StyleProductItem.btnItem} ${StyleProductItem.btnDelete}`}
                    >
                        <FontAwesomeIcon icon={faTrash} />

                        Remover
                    </button>

                    {promocao && (
                        <button
                            type="button"
                            onClick={removePromotion}
                            className={`${StyleProductItem.btnItem} ${StyleProductItem.btnDelete}`}
                        >
                            <FontAwesomeIcon icon={faTag} />

                            Remover promoção
                        </button>
                    )}
                </div>
            ) : (

                /* =========================
                   ÁREA CLIENTE
                ========================= */

                <div
                    className={
                        StyleProductItem.actions
                    }
                >
                    <button
                        type="button"
                        onClick={addToCarrinho}
                        className={`${StyleProductItem.btnItem} ${StyleProductItem.btnCarrinho}`}
                    >
                        <FontAwesomeIcon
                            icon={faCartPlus}
                        />

                        Carrinho
                    </button>

                    <button
                        type="button"
                        onClick={buyNow}
                        className={`${StyleProductItem.btnItem} ${StyleProductItem.btnBuy}`}
                    >
                        <FontAwesomeIcon
                            icon={faBolt}
                        />

                        Comprar agora
                    </button>
                </div>
            )}
        </article>
    );
}