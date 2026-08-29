import Header from "../../../components/organism/Header";
import ProductList from "../../../components/molecules/ProductList";
import StyleCardapio from "./style.module.css";

import { useState, useEffect } from "react";

export default function Cardapio() {
    
    const [products, setProducts] = useState([]);
    
        useEffect(() => {
            const productsSaveds = localStorage.getItem("products");
        
            if (productsSaveds) {
            setProducts(JSON.parse(productsSaveds));}
        }, []);
    
        useEffect(() => {
            if (products.length > 0) {
            localStorage.setItem("products", JSON.stringify(products));}}, [products]);

    return (
        <>
            <Header />
            <main className={StyleCardapio.container}>
                <section className={StyleCardapio.intro}>
                    
                    <span>🍕 NOSSO CARDÁPIO</span>

                    <h1> Escolha sua pizza favorita </h1>

                    <p> Sabores preparados com ingredientes selecionados para deixar seu pedido ainda mais especial. </p>

                </section>
                <section className={StyleCardapio.products}>
                    <ProductList 
                    products={products}
                    setProducts={setProducts}
                    />
                </section>

            </main>
        </>
    );
}