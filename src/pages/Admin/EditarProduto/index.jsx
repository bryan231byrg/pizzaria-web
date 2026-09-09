import { useEffect, useState } from "react";

import InputForm from "../../../components/molecules/inputForm/";
import StyleEditarProduto from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPizzaSlice,
    faXmark,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";

export default function EditarProduto({
    produto,
    setProducts,
    onClose
}) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [file, setFile] = useState(null);
    const [imagemAtual, setImagemAtual] = useState("");
    const [erro, setErro] = useState("");

    useEffect(() => {
        if (!produto) {
            return;
        }

        setNome(produto.nome || "");
        setPreco(produto.preco || "");
        setCategoria(produto.categoria || "");
        setImagemAtual(produto.file || "");
        setFile(null);
        setErro("");
    }, [produto]);

    const editProduct = (e) => {
        e.preventDefault();
        setErro("");

        if (!nome.trim()) {
            setErro("Informe o nome do produto.");
            return;
        }

        if (!preco.trim()) {
            setErro("Informe o preço do produto.");
            return;
        }

        if (!categoria) {
            setErro("Selecione uma categoria.");
            return;
        }

        const products =
            JSON.parse(localStorage.getItem("products")) || [];

        const salvarProduto = (imagem) => {
            const produtosAtualizados = products.map((product) =>
                Number(product.id) === Number(produto.id)
                    ? {
                          ...product,
                          nome: nome,
                          preco: preco,
                          categoria: categoria,
                          file: imagem
                      }
                    : product
            );

            localStorage.setItem(
                "products",
                JSON.stringify(produtosAtualizados)
            );

            setProducts(produtosAtualizados);
            onClose();
        };

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                salvarProduto(reader.result);
            };

            reader.readAsDataURL(file);
        } else {
            salvarProduto(imagemAtual);
        }
    };

    return (
        <section className={StyleEditarProduto.container}>
            <div className={StyleEditarProduto.header}>
                <div>
                    <h1>Editar Produto</h1>

                    <p>
                        Altere os dados do produto abaixo.
                    </p>
                </div>

                <button
                    type="button"
                    className={StyleEditarProduto.btnClose}
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>

            {erro && (
                <p className={StyleEditarProduto.erro}>
                    {erro}
                </p>
            )}

            <form
                className={StyleEditarProduto.form}
                onSubmit={editProduct}
            >
                <div className={StyleEditarProduto.inputs}>
                    <div className={StyleEditarProduto.input}>
                        <InputForm
                            legend="Nome do produto"
                            type="text"
                            value={nome}
                            onChange={(e) =>
                                setNome(e.target.value)
                            }
                        />
                    </div>

                    <div className={StyleEditarProduto.input}>
                        <InputForm
                            legend="Preço"
                            type="number"
                            min="0"
                            step="0.01"
                            value={preco}
                            onChange={(e) =>
                                setPreco(e.target.value)
                            }
                        />
                    </div>

                    <div className={StyleEditarProduto.input}>
                        <label>
                            Imagem do produto
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setFile(e.target.files[0])
                            }
                        />

                        {imagemAtual && (
                            <div
                                className={
                                    StyleEditarProduto.preview
                                }
                            >
                                <span>
                                    Imagem atual
                                </span>

                                <img
                                    src={imagemAtual}
                                    alt={nome}
                                />
                            </div>
                        )}
                    </div>

                    <div className={StyleEditarProduto.input}>
                        <label>
                            Categoria
                        </label>

                        <div
                            className={
                                StyleEditarProduto.selectWrapper
                            }
                        >
                            <select
                                value={categoria}
                                onChange={(e) =>
                                    setCategoria(e.target.value)
                                }
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Selecione uma categoria
                                </option>

                                <option value="Destaques">
                                    Destaques
                                </option>

                                <option value="Oferta Limitada">
                                    Oferta Limitada
                                </option>

                                <option value="Promoções">
                                    Promoções
                                </option>

                                <option value="Pizza Grande">
                                    Pizza Grande
                                </option>

                                <option value="Pizza Pequena">
                                    Pizza Pequena
                                </option>

                                <option value="Calzone Grande">
                                    Calzone Grande
                                </option>

                                <option value="Bebidas">
                                    Bebidas
                                </option>
                            </select>

                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={
                                    StyleEditarProduto.selectIcon
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className={StyleEditarProduto.actions}>
                    <button
                        type="button"
                        className={
                            StyleEditarProduto.btnCancelar
                        }
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        className={
                            StyleEditarProduto.btnSubmit
                        }
                    >
                        <FontAwesomeIcon
                            icon={faPizzaSlice}
                        />

                        Salvar alterações
                    </button>
                </div>
            </form>
        </section>
    );
}