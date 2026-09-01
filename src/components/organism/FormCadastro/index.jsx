import { Link } from "react-router-dom";
import { useState } from "react";
import InputForm from "../../../components/molecules/inputForm";
import StyleCadastroForm from "./style.module.css";

function FormCadastro({ onSubmit }) {

    const [telefone, setTelefone] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const [mensagem, setMensagem] = useState("");


    return (
        <form
            className={StyleCadastroForm.form}
            onSubmit={(e) => {
                e.preventDefault();

                if (telefone.trim() === "" || senha.trim() === "" || nome.trim() === "") {
                    setMensagem("Preencha todos os campos.");
                    return;
                }

                const resultado = onSubmit(telefone, senha, nome);
                setMensagem(resultado);
            }}
        >

            <div className={StyleCadastroForm.fields}>
                <InputForm
                    legend="Telefone *"
                    type="tel"
                    maxLength={11}
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />

                <InputForm
                    legend="Seu Nome *"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <InputForm
                    legend="Senha *"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

            </div>

            <div className={StyleCadastroForm.actions}>
                <div className={StyleCadastroForm.buttons}>
                    <button type="submit">
                        Entrar
                    </button>
                </div>

                <div className={StyleCadastroForm.anchor}>
                    <Link to="/login">
                        Já tem uma conta?
                    </Link>
                </div>

            </div>
            <div className={StyleCadastroForm.mensage}>
                <p>{mensagem}</p>
            </div>
            
        </form>
    );
}

export default FormCadastro