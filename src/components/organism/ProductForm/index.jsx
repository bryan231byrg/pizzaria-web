import { useState } from "react";
import StyleProductForm from "./style.module.css";

export default function ProductForm({ products, setProducts }) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [url, setUrl] = useState("");

    const sendProduct = (e) => {
        e.preventDefault();

        if (
            nome.trim() === "" ||
            preco.trim() === "" ||
            url.trim() === ""
        ) {
            return;
        }

        const newProduct = {
            id: Date.now(),
            url: url,
            nome: nome,
            preco: preco,
        };

        setProducts([...products, newProduct]);

        setNome("");
        setPreco("");
        setUrl("");
    };

    return (
        <form
            className={StyleProductForm.form}
            onSubmit={sendProduct}
        >
            <input
                className={StyleProductForm.input}
                type="URL"
                placeholder="Coloque o URL da imagem do Produto"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
            />

            <input
                className={StyleProductForm.input}
                type="text"
                placeholder="Digite o nome do produto..."
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />

            <input
                className={StyleProductForm.input}
                type="text"
                placeholder="Digite o Preço do Produto..."
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
            />

            <button
                type="submit"
                className={StyleProductForm.btnSubmit}
            >
                Adicionar
            </button>
        </form>
    );
}