import { useEffect, useState } from "react";
import StyleCartSidebar from "./style.module.css";
import CartItem from "../../atoms/CartItem";

export default function CartSidebar() {
    const [carrinho, setCarrinho] = useState([]);
    const [removendo, setRemovendo] = useState(null);
    const [atualizando, setAtualizando] = useState(false);

    useEffect(() => {
        function atualizarCarrinho() {
            const carrinhoSalvo =
                JSON.parse(localStorage.getItem("carrinho")) || [];

            setCarrinho(carrinhoSalvo);

            setAtualizando(true);

            setTimeout(() => {
                setAtualizando(false);
            }, 400);
        }

        atualizarCarrinho();

        window.addEventListener(
            "carrinhoAtualizado",
            atualizarCarrinho
        );

        return () => {
            window.removeEventListener(
                "carrinhoAtualizado",
                atualizarCarrinho
            );
        };
    }, []);

    const salvarCarrinho = (novoCarrinho) => {
        setCarrinho(novoCarrinho);

        localStorage.setItem(
            "carrinho",
            JSON.stringify(novoCarrinho)
        );

        window.dispatchEvent(
            new Event("carrinhoAtualizado")
        );
    };

    const aumentarQuantidade = (id) => {
        const novoCarrinho = carrinho.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    quantidade:
                        Number(product.quantidade) + 1
                };
            }

            return product;
        });

        salvarCarrinho(novoCarrinho);
    };

    const diminuirQuantidade = (id) => {
        const novoCarrinho = carrinho
            .map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantidade:
                            Number(product.quantidade) - 1
                    };
                }

                return product;
            })
            .filter(
                (product) =>
                    Number(product.quantidade) > 0
            );

        salvarCarrinho(novoCarrinho);
    };

    const removerProduto = (id) => {
        setRemovendo(id);

        setTimeout(() => {
            const novoCarrinho = carrinho.filter(
                (product) => product.id !== id
            );

            salvarCarrinho(novoCarrinho);
            setRemovendo(null);
        }, 350);
    };

    const total = carrinho.reduce(
        (acc, product) => {
            const preco = Number(
                product.precoAplicado ??
                product.preco
            );

            return (
                acc +
                preco * Number(product.quantidade)
            );
        },
        0
    );

    return (
        <aside
            className={`${StyleCartSidebar.sidebar} ${
                atualizando
                    ? StyleCartSidebar.updated
                    : ""
            }`}
        >
            <div className={StyleCartSidebar.header}>
                <div>
                    <span className={StyleCartSidebar.headerIcon}>
                        🛒
                    </span>

                    <h2>Meu Carrinho</h2>
                </div>

                {carrinho.length > 0 && (
                    <span className={StyleCartSidebar.counter}>
                        {carrinho.reduce(
                            (total, product) =>
                                total +
                                Number(product.quantidade),
                            0
                        )}
                    </span>
                )}
            </div>

            <div className={StyleCartSidebar.content}>
                {carrinho.length === 0 ? (
                    <div className={StyleCartSidebar.empty}>
                        <span className={StyleCartSidebar.emptyIcon}>
                            🛒
                        </span>

                        <strong>
                            Seu carrinho está vazio
                        </strong>

                        <p>
                            Adicione alguns produtos
                            deliciosos!
                        </p>
                    </div>
                ) : (
                    carrinho.map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            aumentarQuantidade={
                                aumentarQuantidade
                            }
                            diminuirQuantidade={
                                diminuirQuantidade
                            }
                            removerProduto={
                                removerProduto
                            }
                            removendo={
                                removendo === product.id
                            }
                        />
                    ))
                )}
            </div>

            {carrinho.length > 0 && (
                <div className={StyleCartSidebar.footer}>
                    <div className={StyleCartSidebar.total}>
                        <span>Total do pedido</span>

                        <strong>
                            R${" "}
                            {total
                                .toFixed(2)
                                .replace(".", ",")}
                        </strong>
                    </div>

                    <button
                        type="button"
                        className={
                            StyleCartSidebar.checkout
                        }
                    >
                        Finalizar pedido
                        <span>→</span>
                    </button>
                </div>
            )}
        </aside>
    );
}