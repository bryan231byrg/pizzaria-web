import ClientNav from "../../molecules/ClientNav"
import Logo from "../../atoms/Logo"
import StyleClientHeader from "./style.module.css";


export default function ClientHeader(){
    
    return(
        <>
        <header className={StyleClientHeader.header}>
            <Logo />
            <ClientNav /> 
        </header>
        </>
    )
}