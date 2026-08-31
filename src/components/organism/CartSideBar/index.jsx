import { useEffect, useState } from "react";

import StyleCartSidebar from "./style.module.css";

import CartItem from "../../atoms/CartItem";

export default function CartSidebar({ isOpen, onClose }) {
    const [carrinho, setCarrinho] = useState([]);

    // Carrega o carrinho quando a sidebar abre
    useEffect(() => {
        if (!isOpen) return;

        const carrinhoSalvo =
            JSON.parse(localStorage.getItem("carrinho")) || [];

        setCarrinho(carrinhoSalvo);
    }, [isOpen]);

    // Salva o carrinho no localStorage
    const salvarCarrinho = (novoCarrinho) => {
        setCarrinho(novoCarrinho);
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    };

    // Aumentar quantidade
    const aumentarQuantidade = (id) => {
        const novoCarrinho = carrinho.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    quantidade: product.quantidade + 1,
                };
            }

            return product;
        });

        salvarCarrinho(novoCarrinho);
    };

    // Diminuir quantidade
    const diminuirQuantidade = (id) => {
        const novoCarrinho = carrinho
            .map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantidade: product.quantidade - 1,
                    };
                }

                return product;
            })
            .filter((product) => product.quantidade > 0);

        salvarCarrinho(novoCarrinho);
    };

    // Remover produto
    const removerProduto = (id) => {
        const novoCarrinho = carrinho.filter(
            (product) => product.id !== id
        );

        salvarCarrinho(novoCarrinho);
    };

    // Calcula o total
    const total = carrinho.reduce(
        (acc, product) =>
            acc + Number(product.preco) * product.quantidade,
        0
    );

    return (
        <>
            {isOpen && (
                <div
                    className={StyleCartSidebar.overlay}
                    onClick={onClose}
                />
            )}

            <aside
                className={`${StyleCartSidebar.sidebar} ${
                    isOpen ? StyleCartSidebar.open : ""
                }`}
            >
                {/* HEADER */}
                <div className={StyleCartSidebar.header}>
                    <h2>Meu Carrinho</h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className={StyleCartSidebar.close}
                    >
                        ×
                    </button>
                </div>

                {/* PRODUTOS */}
                <div className={StyleCartSidebar.content}>
                    {carrinho.length === 0 ? (
                        <p className={StyleCartSidebar.empty}>
                            Seu carrinho está vazio.
                        </p>
                    ) : (
                        carrinho.map((product) => (
                            <CartItem
                                key={product.id}
                                product={product}
                                aumentarQuantidade={aumentarQuantidade}
                                diminuirQuantidade={diminuirQuantidade}
                                removerProduto={removerProduto}
                            />
                        ))
                    )}
                </div>

                {/* FOOTER */}
                {carrinho.length > 0 && (
                    <div className={StyleCartSidebar.footer}>
                        <div className={StyleCartSidebar.total}>
                            <span>Total</span>

                            <strong>
                                R$ {total
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </strong>
                        </div>

                        <button
                            type="button"
                            className={StyleCartSidebar.checkout}
                        >
                            Finalizar pedido
                        </button>
                    </div>
                )}
            </aside>
        </>
    );
}