import FormCadastro from "../../../components/organism/FormCadastro";

import StyleCadastro from "./style.module.css";

function Cadastro({ onLogin }) {

    function handleSubmit(telefone, senha, nome) {

        const users =
            JSON.parse(localStorage.getItem("users")) || [];

        const usuarioExistente = users.find((user) => {
            return user.telefone === telefone;
        });

        if (usuarioExistente) {
            return "Este telefone já está cadastrado.";
        }

        const novoUsuario = {
            telefone: telefone,
            senha: senha,
            nome: nome,
            tipo: "cliente"
        };

        users.push(novoUsuario);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        if (onLogin) {
            onLogin();
        }
    }

    return (
        <main className={StyleCadastro.main}>

            <section className={StyleCadastro.cadastro}>

                <FormCadastro
                    onSubmit={handleSubmit}
                />

                <div className={StyleCadastro.login}>
                    <span>
                        Já possui uma conta?
                    </span>

                    <button
                        type="button"
                        onClick={onLogin}
                    >
                        Entrar
                    </button>
                </div>

            </section>

        </main>
    );
}

export default Cadastro;