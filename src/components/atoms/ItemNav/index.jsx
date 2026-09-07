import { Link } from "react-router-dom";

import StyleClientItemNav from "./style.module.css";

export default function ItemNav({
    to,
    children,
    className
}) {
    return (
        <li className={StyleClientItemNav.item}>
            <Link
                to={to}
                className={`${StyleClientItemNav.link} ${className || ""}`}
            >
                {children}
            </Link>
        </li>
    );
}