import StyleProductList from "./style.module.css";

import ProductItem from "../../atoms/ProductItem";

function ProductList({ products, setProducts, categoria, busca = "" }) {

    const produtosFiltrados = products.filter(
        (product) =>
            product.categoria === categoria &&
            product.nome?.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <section className={StyleProductList.list}>
            {produtosFiltrados.map((product) => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    />
                );
            })}
        </section>
    );
}

export default ProductList;