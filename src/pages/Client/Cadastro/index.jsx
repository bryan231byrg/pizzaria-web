import FormCadastro from "../../../components/organism/FormCadastro";
import { useNavigate } from "react-router-dom";
import StyleCadastro from "./style.module.css";
import Logo from "../../../components/atoms/Logo";

function Cadastro() {
    const navigate = useNavigate();

    function handleSubmit(telefone, senha, nome) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const usuarioExistente = users.find(
            (user) => user.telefone === telefone
        );

        if (usuarioExistente) {
            return "Este telefone já está cadastrado.";
        }

        const novoUsuario = {
            telefone,
            senha,
            nome,
            tipo: "cliente"
        };

        users.push(novoUsuario);
        localStorage.setItem("users", JSON.stringify(users));

        navigate("/login");
    }

    return (
        <main className={StyleCadastro.main}>
            <section className={StyleCadastro.cadastro}>

                <div className={StyleCadastro.logo}>
                    <Logo />
                </div>

                <div className={StyleCadastro.header}>
                    <h1>Cadastro</h1>

                    <p>
                        Cadastre-se para continuar.
                    </p>
                </div>

                <div className={StyleCadastro.form}>
                    <FormCadastro onSubmit={handleSubmit} />
                </div>

            </section>
        </main>
    );
}

export default Cadastro;