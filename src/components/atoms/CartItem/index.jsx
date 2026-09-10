import StyleCartItem from "./style.module.css";

export default function CartItem({
    product,
    aumentarQuantidade,
    diminuirQuantidade,
    removerProduto,
    removendo
}) {
    const preco = Number(
        product.precoAplicado ?? product.preco
    );

    const totalProduto =
        preco * Number(product.quantidade);

    return (
        <article
            className={`${StyleCartItem.item} ${
                removendo
                    ? StyleCartItem.removing
                    : ""
            }`}
        >
            <div className={StyleCartItem.imageContainer}>
                <img
                    src={product.file}
                    alt={product.nome}
                    className={StyleCartItem.image}
                />
            </div>

            <div className={StyleCartItem.info}>
                <h2>{product.nome}</h2>

                <p>
                    R${" "}
                    {preco
                        .toFixed(2)
                        .replace(".", ",")}
                </p>
            </div>

            <div className={StyleCartItem.controls}>
                <div className={StyleCartItem.quantity}>
                    <button
                        type="button"
                        onClick={() =>
                            diminuirQuantidade(
                                product.id
                            )
                        }
                        aria-label="Diminuir quantidade"
                    >
                        −
                    </button>

                    <span>
                        {product.quantidade}
                    </span>

                    <button
                        type="button"
                        onClick={() =>
                            aumentarQuantidade(
                                product.id
                            )
                        }
                        aria-label="Aumentar quantidade"
                    >
                        +
                    </button>
                </div>

                <strong
                    className={StyleCartItem.total}
                >
                    R${" "}
                    {totalProduto
                        .toFixed(2)
                        .replace(".", ",")}
                </strong>
            </div>

            <button
                type="button"
                className={StyleCartItem.remove}
                onClick={() =>
                    removerProduto(product.id)
                }
            >
                <span>×</span>
                Remover produto
            </button>
        </article>
    );
}
