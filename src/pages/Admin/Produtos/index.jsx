import { useState, useEffect } from "react";
import Cardapio from "../../Client/Cardapio/"

import Header from "../../../components/organism/Header/";
import StyleProducts from "./style.module.css";

import ProductForm from "../../../components/organism/ProductForm";

export default function Produtos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsSaveds = localStorage.getItem("products");

    if (productsSaveds) {
      setProducts(JSON.parse(productsSaveds));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(
        "products",
        JSON.stringify(products)
      );
    }
  }, [products]);

  return (
    <>
      <Header />

      <main>
        <div className={StyleProducts.Meio}>
          <ProductForm
            products={products}
            setProducts={setProducts}
          />
        </div>

      <Cardapio></Cardapio>
      </main>
    </>
  );
}