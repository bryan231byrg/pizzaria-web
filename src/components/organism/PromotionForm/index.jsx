import { useState } from "react";

import InputForm from "../../molecules/inputForm";

import StylePromotionForm from "./style.module.css";

function PromotionForm({ onClose }) {
    const [produtos] = useState(
        JSON.parse(localStorage.getItem("products")) || []
    );

    const [produtoId, setProdutoId] = useState("");
    const [valor, setValor] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!produtoId) {
            alert("Selecione um produto.");
            return;
        }

        if (!valor || Number(valor) <= 0) {
            alert("Informe um preço promocional válido.");
            return;
        }

        if (!dataInicio || !dataFim) {
            alert("Informe a data de início e a data de término.");
            return;
        }

        if (dataFim < dataInicio) {
            alert(
                "A data de término não pode ser anterior à data de início."
            );
            return;
        }

        const promocoes =
            JSON.parse(localStorage.getItem("promocoes")) || [];

        const promocaoExistente = promocoes.find(
            (promocao) =>
                Number(promocao.productId) === Number(produtoId) &&
                promocao.ativa === true
        );

        if (promocaoExistente) {
            alert("Este produto já possui uma promoção ativa.");
            return;
        }

        const novaPromocao = {
            id: Date.now(),
            productId: Number(produtoId),
            tipo: "preco",
            valor: Number(valor),
            dataInicio,
            dataFim,
            ativa: true
        };

        localStorage.setItem(
            "promocoes",
            JSON.stringify([
                ...promocoes,
                novaPromocao
            ])
        );

        setProdutoId("");
        setValor("");
        setDataInicio("");
        setDataFim("");

        if (typeof onClose === "function") {
            onClose();
        }
    }

    return (
        <form
            className={StylePromotionForm.form}
            onSubmit={handleSubmit}
        >
            <fieldset className={StylePromotionForm.fieldset}>
                <legend>Produto</legend>

                <select
                    className={StylePromotionForm.select}
                    value={produtoId}
                    onChange={(e) => setProdutoId(e.target.value)}
                    required
                >
                    <option value="">
                        Selecione um produto
                    </option>

                    {produtos.map((produto) => (
                        <option
                            key={produto.id}
                            value={produto.id}
                        >
                            {produto.nome}
                        </option>
                    ))}
                </select>
            </fieldset>

            <InputForm
                legend="Preço promocional"
                type="number"
                min="0"
                step="0.01"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />

            <InputForm
                legend="Data de início"
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
            />

            <InputForm
                legend="Data de término"
                type="date"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
            />

            <button
                className={StylePromotionForm.button}
                type="submit"
            >
                Cadastrar promoção
            </button>
        </form>
    );
}

export default PromotionForm;