import { useState } from "react";

import InputForm from "../../molecules/inputForm";

import StyleLoginForm from "./style.module.css";

function FormLogin({ onSubmit, onCadastro }) {
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (telefone.trim() === "" || senha.trim() === "") {
            setMensagem("Preencha todos os campos.");
            return;
        }

        const resultado = onSubmit(telefone, senha);

        if (resultado) {
            setMensagem(resultado);
        }
    }

    return (
        <form
            className={StyleLoginForm.form}
            onSubmit={handleSubmit}
        >
            <div className={StyleLoginForm.fields}>

                <InputForm
                    legend="Telefone"
                    type="tel"
                    maxLength={11}
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />

                <InputForm
                    legend="Senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

            </div>

            <div className={StyleLoginForm.actions}>

                <div className={StyleLoginForm.buttons}>
                    <button type="submit">
                        Entrar
                    </button>
                </div>

                <div className={StyleLoginForm.anchor}>
                    <span>Não tem uma conta?</span>

                    <button
                        type="button"
                        onClick={onCadastro}
                    >
                        Criar conta
                    </button>
                </div>

            </div>

            {mensagem && (
                <div className={StyleLoginForm.mensage}>
                    <p>{mensagem}</p>
                </div>
            )}

        </form>
    );
}

export default FormLogin;