import { Link } from "react-router-dom"

export default function AdminItemNav({to, children}){

    return (
        <>
            <li>
                <Link to={to}>
                    {children}
                </Link>
            </li>
        </>
    )
}