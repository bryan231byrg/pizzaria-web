import { useState } from "react";
import { useEffect } from "react";

import AdminHeader from "../../../components/organism/AdminHeader/";
import StyleProducts from "./style.module.css";

import ProductForm from "../../../components/organism/ProductForm";
import ProductList from "../../../components/molecules/ProductList";

export default function Produtos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsSaveds = localStorage.getItem("products");
    console.log(productsSaveds);
    if (productsSaveds) {
      setProducts(JSON.parse(productsSaveds));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <>
      <AdminHeader></AdminHeader>
      <main className={StyleProducts.Meio}>
        <h1>Pagina dos produtos (Adm)</h1>

        <ProductForm 
        products={products} 
        setProducts={setProducts} />

        <ProductList 
        products={products} 
        setProducts={setProducts} />

      </main>
    </>
  );
}
