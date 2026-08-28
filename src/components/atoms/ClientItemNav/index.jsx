import { Link } from "react-router-dom"
import StyleClientItemNav from "./style.module.css";

export default function ClientItemNav({to, children}){

    return (
        <li className={StyleClientItemNav.item}>
            <Link 
                to={to}
                className={StyleClientItemNav.link}
            >
                {children}
            </Link>
        </li>
    );
}