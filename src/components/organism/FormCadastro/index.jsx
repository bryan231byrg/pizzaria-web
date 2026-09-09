import { useState } from "react";

import InputForm from "../../../components/molecules/inputForm";

import StyleCadastroForm from "./style.module.css";

function FormCadastro({ onSubmit }) {

    const [telefone, setTelefone] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setMensagem("");

        if (
            telefone.trim() === "" ||
            nome.trim() === "" ||
            senha.trim() === ""
        ) {
            setMensagem("Preencha todos os campos.");
            return;
        }

        const resultado = onSubmit(
            telefone,
            senha,
            nome
        );

        if (resultado) {
            setMensagem(resultado);
        }
    }

    return (
        <form
            className={StyleCadastroForm.form}
            onSubmit={handleSubmit}
        >

            <div className={StyleCadastroForm.fields}>

                <InputForm
                    legend="Telefone *"
                    type="tel"
                    maxLength={11}
                    value={telefone}
                    onChange={(e) =>
                        setTelefone(e.target.value)
                    }
                />

                <InputForm
                    legend="Seu Nome *"
                    type="text"
                    value={nome}
                    onChange={(e) =>
                        setNome(e.target.value)
                    }
                />

                <InputForm
                    legend="Senha *"
                    type="password"
                    value={senha}
                    onChange={(e) =>
                        setSenha(e.target.value)
                    }
                />

            </div>

            <div className={StyleCadastroForm.actions}>

                <button
                    type="submit"
                    className={StyleCadastroForm.submitButton}
                >
                    Criar conta
                </button>

            </div>

            {mensagem && (
                <div className={StyleCadastroForm.mensage}>
                    <p>{mensagem}</p>
                </div>
            )}

        </form>
    );
}

export default FormCadastro;