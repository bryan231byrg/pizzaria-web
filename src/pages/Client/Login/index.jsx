import FormLogin from "../../../components/organism/FormLogin";
import useAuth from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import StyleLogin from "./style.module.css";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleSubmit(telefone, senha) {
        const admin = {
            telefone: "85994012630",
            nome: "Bryan William",
            senha: "admin1234",
            tipo: "admin"
        };

        if (admin.telefone === telefone && admin.senha === senha) {
            login(admin);
            navigate("/admin");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const usuarioEncontrado = users.find((user) => {
            return user.telefone === telefone && user.senha === senha;
        });

        if (usuarioEncontrado) {
            login(usuarioEncontrado);
            navigate("/");
            return;
        }

        return "Telefone ou senha incorretos";
    }

    return (
        <main className={StyleLogin.main}>
            <section className={StyleLogin.login}>
                <div className={StyleLogin.header}>
                    <h1>Login</h1>
                    <p>
                        Entre com sua conta para continuar.
                    </p>
                </div>

                <div className={StyleLogin.form}>
                    <FormLogin onSubmit={handleSubmit} />
                </div>
            </section>
        </main>
    );
}

export default Login;