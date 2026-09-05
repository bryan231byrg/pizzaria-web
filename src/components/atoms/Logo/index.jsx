import LogoPizzaria from "../../../assets/logoteste.png";
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