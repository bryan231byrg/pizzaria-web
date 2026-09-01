import StyleClientProductItem from "./style.module.css";

export default function ClientProductItem({ product, onAddToCart }) {
    return (
        <article className={StyleClientProductItem.card}>

            <div className={StyleClientProductItem.imageContainer}>
                <img
                    src={product.url}
                    alt={product.nome}
                    className={StyleClientProductItem.image}
                />
            </div>

            <div className={StyleClientProductItem.info}>

                <h2>{product.nome}</h2>

                <p className={StyleClientProductItem.price}>
                    R${" "}
                    {Number(product.preco)
                        .toFixed(2)
                        .replace(".", ",")}
                </p>

                <button
                    type="button"
                    className={StyleClientProductItem.button}
                    onClick={() => onAddToCart(product)}
                >
                    <span>+</span>
                    Adicionar ao carrinho
                </button>

            </div>

        </article>
    );
}