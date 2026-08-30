import { useState } from "react";
import InputForm from "../../molecules/InputForm/";
import StyleProductForm from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

export default function ProductForm({ products, setProducts }) {
	const [nome, setNome] = useState("");
	const [preco, setPreco] = useState("");
	const [file, setFile] = useState(null);
	const [categoria, setCategoria] = useState("");

	const sendProduct = (e) => {
		e.preventDefault();

		if (
			nome.trim() === "" ||
			preco.trim() === "" ||
			!file ||
			categoria === ""
		) {
			return;
		}

		const reader = new FileReader();

		reader.onloadend = () => {
			const newProduct = {
				id: Date.now(),
				file: reader.result,
				nome: nome,
				preco: preco,
				categoria: categoria,
			};

			setProducts([...products, newProduct]);

			setNome("");
			setPreco("");
			setFile(null);
			setCategoria("");
		};

		reader.readAsDataURL(file);
	};

	return (
		<section className={StyleProductForm.container}>
			<div className={StyleProductForm.header}>
				<h4>Adicionar Produto</h4>
				<p>Preencha os dados abaixo para adicionar um novo produto.</p>
			</div>

			<form
				className={StyleProductForm.form}
				onSubmit={sendProduct}
			>
				<div className={StyleProductForm.inputs}>
					<div className={StyleProductForm.input}>
						<InputForm
							legend="Nome do produto"
							value={nome}
							onChange={(e) => setNome(e.target.value)}
						/>
					</div>

					<div className={StyleProductForm.input}>
						<InputForm
							legend="Preço"
							type="number"
							value={preco}
							onChange={(e) => setPreco(e.target.value)}
						/>
					</div>

					<div className={StyleProductForm.input}>
						<label>Imagem do produto</label>
						<input
							type="file"
							accept="image/*"
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>

					<div className={StyleProductForm.input}>
						<label>Categoria</label>
						<select
							value={categoria}
							onChange={(e) => setCategoria(e.target.value)} >
							<option value="">Selecione uma categoria</option>
							<option value="Destaques">Destaques</option>
							<option value="Oferta Limitada">Oferta Limitada</option>
							<option value="Promoções">Promoções</option>
							<option value="Pizza Grande">Pizza Grande</option>
							<option value="Pizza Pequena">Pizza Pequena</option>
							<option value="Calzone Grande">Calzone Grande</option>
							<option value="Bebidas">Bebidas</option>
						</select>
					</div>
				</div>

				<button
					type="submit"
					className={StyleProductForm.btnSubmit}
				>
					<FontAwesomeIcon icon={faPizzaSlice} />
					Adicionar Produto
				</button>
			</form>
		</section>
	);
}