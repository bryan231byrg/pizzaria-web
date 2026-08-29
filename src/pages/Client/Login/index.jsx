import FormLogin from "../../../components/organism/FormLogin";
import useAuth from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import StyleLogin from "./style.module.css";

function Login() {
    const Admins = [
        {
            telefone: "85994012630",
            nome: "Bryan",
            senha: "admin1234",
            tipo: "admin",
        }
    ];

    const navigate = useNavigate();
    const { login } = useAuth();

    function handleSubmit(telefone, senha) {

        const adminEncontrado = Admins.find((admin) => {
            return (
                admin.telefone === telefone &&
                admin.senha === senha
            );
        });

        if (adminEncontrado) {
            login(adminEncontrado);
            alert("Login realizado com sucesso!");
            navigate("/admin");
        } else {
            alert("Telefone ou senha incorretos");
        }
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
                    <FormLogin
                        onSubmit={handleSubmit}
                    />
                </div>
            </section>
        </main>
    );
}

export default Login;