import StyleProductList from "./style.module.css";

import ProductItem from "../../atoms/ProductItem";

function ProductList({
    products = [],
    setProducts,
    categoria,
    busca = "",
    somentePromocoes = false,
    onEdit
}) {
    const promocoes =
        JSON.parse(localStorage.getItem("promocoes")) || [];

    const produtosFiltrados = products.filter((product) => {
        if (!product) {
            return false;
        }

        const promocao = promocoes.find(
            (p) => p.productId === product.id
        );

        if (somentePromocoes && !promocao) {
            return false;
        }

        return (
            (!categoria || product.categoria === categoria) &&
            product.nome?.toLowerCase().includes(busca.toLowerCase())
        );
    });

    return (
        <section className={StyleProductList.list}>
            {produtosFiltrados.map((product) => {
                const promocao = promocoes.find(
                    (p) => p.productId === product.id
                );

                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                        promocao={promocao}
                        onEdit={onEdit}
                    />
                );
            })}
        </section>
    );
}

export default ProductList;