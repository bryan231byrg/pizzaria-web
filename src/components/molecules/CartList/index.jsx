import { useEffect, useState } from "react";
import StyleCarrinho from "./style.module.css";
import CartItem from "../../atoms/CartItem";

export default function CartList() {
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {

        const carrinhoSalvo =
            JSON.parse(localStorage.getItem("carrinho")) || [];

        setCarrinho(carrinhoSalvo);

    }, []);

    const atualizarCarrinho = (novoCarrinho) => {

        setCarrinho(novoCarrinho);

        localStorage.setItem(
            "carrinho",
            JSON.stringify(novoCarrinho)
        );

    };

    const aumentarQuantidade = (id) => {

        const novoCarrinho = carrinho.map((product) =>
            product.id === id
                ? {
                    ...product,
                    quantidade: product.quantidade + 1
                }
                : product
        );

        atualizarCarrinho(novoCarrinho);
    };

    const diminuirQuantidade = (id) => {

        const novoCarrinho = carrinho
            .map((product) =>
                product.id === id
                    ? {
                        ...product,
                        quantidade: product.quantidade - 1
                    }
                    : product
            )
            .filter((product) => product.quantidade > 0);

        atualizarCarrinho(novoCarrinho);
    };

    const removerProduto = (id) => {

        const novoCarrinho = carrinho.filter(
            (product) => product.id !== id
        );

        atualizarCarrinho(novoCarrinho);
    };

    return (

        <section className={StyleCarrinho.container}>

            {carrinho.length === 0 ? (

                <p className={StyleCarrinho.empty}>
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

        </section>

    );
}
