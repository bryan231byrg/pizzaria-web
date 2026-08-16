import LogoPizzaria from "../../../assets/logo-papa'spizzeria.jpg";
import StyleLogo from "./style.module.css";

export default function Logo() {
    return (
        <img
            src={LogoPizzaria}
            alt="Logo"
            className={StyleLogo.logo}
        />
    );
}