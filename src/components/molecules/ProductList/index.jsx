import StyleProductList from "./style.module.css";
import ProductItem from "../../atoms/ProductItem";

export default function ProductList({ products, setProducts }) {
  return (
    <section className={StyleProductList.list}>
      {products.map((product) => {
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