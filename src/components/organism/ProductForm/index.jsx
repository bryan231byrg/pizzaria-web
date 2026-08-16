import { useState } from "react";
import StyleProductForm from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

export default function ProductForm({ products, setProducts }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [url, setUrl] = useState("");

  const sendProduct = (e) => {
    e.preventDefault();

    if (nome.trim() === "" || preco.trim() === "" || url.trim() === "") {
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
    <section className={StyleProductForm.container}>
      <div className={StyleProductForm.header}>
        <h4>Adicionar Produto</h4>
        <p>Preencha os dados abaixo para adicionar um novo produto.</p>
      </div>

      <form className={StyleProductForm.form} onSubmit={sendProduct}>
        <div className={StyleProductForm.field}>
          <label htmlFor="url">URL da imagem do produto</label>

          <input
            id="url"
            className={StyleProductForm.input}
            type="url"
            placeholder="Cole a URL da imagem do produto"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <div className={StyleProductForm.field}>
          <label htmlFor="nome">Nome do produto</label>

          <input
            id="nome"
            className={StyleProductForm.input}
            type="text"
            placeholder="Digite o nome do produto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className={StyleProductForm.field}>
          <label htmlFor="preco">Preço do produto (R$)</label>

          <input
            id="preco"
            className={StyleProductForm.input}
            type="text"
            placeholder="Digite o preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={StyleProductForm.btnSubmit}>
          <FontAwesomeIcon icon={faPizzaSlice} />
          Adicionar Produto
        </button>
      </form>
    </section>
  );
}
