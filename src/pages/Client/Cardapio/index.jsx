import ProductList from "../../../components/molecules/ProductList";
import StyleCardapio from "./style.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faStar,
    faFire,
    faTag,
    faPizzaSlice,
    faBottleWater
} from "@fortawesome/free-solid-svg-icons";

export default function Cardapio({ categoria, busca }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsSaveds = localStorage.getItem("products");

        if (productsSaveds) {
            setProducts(JSON.parse(productsSaveds));
        }
    }, []);

    const categorias = [
        { nome: "Destaques", titulo: "Destaques", icon: faStar },
        { nome: "Oferta Limitada", titulo: "Oferta LIMITADA", icon: faFire },
        { nome: "Promoções", titulo: "Promoções do dia", icon: faTag },
        { nome: "Pizza Grande", titulo: "Pizzas | Grande", icon: faPizzaSlice },
        { nome: "Pizza Pequena", titulo: "Pizzas | Pequena", icon: faPizzaSlice },
        { nome: "Calzone Grande", titulo: "Calzones | Grande", icon: faPizzaSlice },
        { nome: "Bebidas", titulo: "Bebidas", icon: faBottleWater }
    ];

    const categoriasExibidas = categoria
        ? categorias.filter((item) => item.nome === categoria)
        : categorias;

    return (
        <section className={StyleCardapio.Cardapio}>
            <div className={StyleCardapio.categorias}>
                {categoriasExibidas.map((item) => (
                    <article key={item.nome}>
                        <h4>
                            <FontAwesomeIcon icon={item.icon} />
                            {item.titulo}
                        </h4>

                        <ProductList
                            products={products}
                            setProducts={setProducts}
                            categoria={item.nome}
                            busca={busca}
                        />
                    </article>
                ))}
            </div>
        </section>
    );
}