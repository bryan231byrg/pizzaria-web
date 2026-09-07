import StyleCartItem from "./style.module.css";

export default function CartItem({
    product,
    aumentarQuantidade,
    diminuirQuantidade,
    removerProduto
}) {
    const preco =
        Number(product.precoAplicado ?? product.preco);

    const totalProduto =
        preco * product.quantidade;

    return (
        <article className={StyleCartItem.item}>
            {/* IMAGEM */}

            <img
                src={product.file}
                alt={product.nome}
                className={StyleCartItem.image}
            />


            {/* INFORMAÇÕES */}

            <div className={StyleCartItem.info}>
                <h2>
                    {product.nome}
                </h2>

                <p>
                    R$ {preco
                        .toFixed(2)
                        .replace(".", ",")}
                </p>
            </div>


            {/* CONTROLES */}

            <div className={StyleCartItem.controls}>

                {/* QUANTIDADE */}

                <div className={StyleCartItem.quantity}>
                    <button
                        type="button"
                        onClick={() =>
                            diminuirQuantidade(product.id)
                        }
                    >
                        -
                    </button>

                    <span>
                        {product.quantidade}
                    </span>

                    <button
                        type="button"
                        onClick={() =>
                            aumentarQuantidade(product.id)
                        }
                    >
                        +
                    </button>
                </div>


                {/* TOTAL DO PRODUTO */}

                <div className={StyleCartItem.total}>
                    <strong>
                        R$ {totalProduto
                            .toFixed(2)
                            .replace(".", ",")}
                    </strong>
                </div>


                {/* REMOVER */}

                <button
                    type="button"
                    className={StyleCartItem.remove}
                    onClick={() =>
                        removerProduto(product.id)
                    }
                >
                    Remover
                </button>

            </div>
        </article>
    );
}