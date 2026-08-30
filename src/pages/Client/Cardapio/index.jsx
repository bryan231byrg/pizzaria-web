import Header from "../../../components/organism/Header";
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

export default function Cardapio() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const productsSaveds = localStorage.getItem("products");

		if (productsSaveds) {
			setProducts(JSON.parse(productsSaveds));
		}
	}, []);

	return (
		<>
			<Header />

			<main className={StyleCardapio.container}>
				<section className={StyleCardapio.intro}>
					<span>
						<FontAwesomeIcon icon={faPizzaSlice} /> NOSSO CARDÁPIO
					</span>

					<h1>Escolha sua pizza favorita</h1>

					<p>
						Sabores preparados com ingredientes selecionados para deixar seu
						pedido ainda mais especial.
					</p>
				</section>

				<section className={StyleCardapio.categorias}>
					<article className={StyleCardapio.destaques}>
						<h4>
							<FontAwesomeIcon icon={faStar} /> Destaques
						</h4>

						<ProductList
							products={products}
							setProducts={setProducts}
							categoria="Destaques"
						/>
					</article>

					<article className={StyleCardapio.OfertaLimitada}>
						<h4>
							<FontAwesomeIcon icon={faFire} /> Oferta LIMITADA
						</h4>

						<ProductList
							products={products}
							setProducts={setProducts}
							categoria="Oferta Limitada"
						/>
					</article>

					<article className={StyleCardapio.promocoes}>
						<h4>
							<FontAwesomeIcon icon={faTag} /> Promoções do dia
						</h4>

						<ProductList
							products={products}
							setProducts={setProducts}
							categoria="Promoções"
						/>
					</article>

					<article className={StyleCardapio.PizzasG}>
						<h4>
							<FontAwesomeIcon icon={faPizzaSlice} /> Pizzas | Grande
						</h4>

						<ProductList
							products={products}
							setProducts={setProducts}
							categoria="Pizza Grande"
						/>
					</article>

					<article className={StyleCardapio.PizzasP}>
						<h4>
							<FontAwesomeIcon icon={faPizzaSlice} /> Pizzas | Pequena
						</h4>

						<ProductList
							products={products}
							setProducts={setProducts}
							categoria="Pizza Pequena"
						/>
					</article>

					<article className={StyleCardapio.CalzonesG}>
						<h4>
							<FontAwesomeIcon icon={faPizzaSlice} /> Calzones | Grande
						</h4>

						<ProductList
							products={products}
							setProducts={setProducts}
							categoria="Calzone Grande"
						/>
					</article>

					<article className={StyleCardapio.Bebidas}>
						<h4>
							<FontAwesomeIcon icon={faBottleWater} /> Bebidas
						</h4>

						<ProductList
							products={products}
							setProducts={setProducts}
							categoria="Bebidas"
						/>
					</article>
				</section>
			</main>
		</>
	);
}