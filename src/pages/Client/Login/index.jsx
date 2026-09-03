import FormLogin from "../../../components/organism/FormLogin";
import useAuth from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import StyleLogin from "./style.module.css";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    function submitAccess(telefone, senha) {
        const admin = [ 
            {
            telefone: "85994012630",
            nome: "Bryan William",
            senha: "admin1234",
            tipo: "admin"
            },
            {
                telefone: "85987434352",
                nome: "Bia Sampaio",
                senha: "admin1234",
                tipo: "admin"
            }
        ];

        const adminEncontrado = admin.find((a) => {
            return a.telefone === telefone && a.senha === senha;
        }); 

        if (adminEncontrado) {
            login(adminEncontrado);
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
                    <FormLogin onSubmit={submitAccess} />
                </div>
            </section>
        </main>
    );
}

export default Login;