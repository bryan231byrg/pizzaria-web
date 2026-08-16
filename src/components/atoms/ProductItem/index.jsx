import StyleProductItem from "./style.module.css";

export default function ProductItem({ product, products, setProducts }) {

    const deleteProduct = () => {
        const productFiltered = products.filter(
            p => p.id !== product.id
        );

        setProducts(productFiltered);
    };

    return (
        <article className={StyleProductItem.card}>

            <img
                src={product.url}
                alt={product.nome}
                className={StyleProductItem.image}
            />

            <div className={StyleProductItem.info}>
                <h2>{product.nome}</h2>

                <p>
                    R$ {product.preco}
                </p>
            </div>

            <button
                onClick={deleteProduct}
                className={StyleProductItem.btnItem}
            >
                Remover
            </button>

        </article>
    );
}
