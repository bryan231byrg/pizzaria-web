    import { Link } from "react-router-dom";
    import { useState } from "react";

    import InputForm from "../../molecules/inputForm";
    import StyleLoginForm from "./style.module.css";

    function FormLogin({ onSubmit }) {
        const [telefone, setTelefone] = useState("");
        const [senha, setSenha] = useState("");

        return (
            <form 
                className={StyleLoginForm.form} 
                onSubmit={(e) => {
                e.preventDefault();
                onSubmit(telefone, senha);
            }}>
                <div className={StyleLoginForm.fields}>
                    <InputForm
                        legend="Telefone"
                        type="tel"
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
                        <Link to="/cadastro">
                            Não tem uma conta?
                        </Link>
                    </div>
                </div>
            </form>
        );
    }

    export default FormLogin;