import { Link } from "react-router-dom"

export default function ClientItemNav({to, children}){

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