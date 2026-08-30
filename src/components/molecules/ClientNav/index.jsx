import ItemNav from "../../atoms/ItemNav";
import StyleClientNav from "./style.module.css";

function ClientNav() {
  return (
    <nav className={StyleClientNav.nav}>
      <ul className={StyleClientNav.navList}>
        <ItemNav to={"/"}>Ínicio</ItemNav>
        <ItemNav to={"/cardapio"}>Cardapio</ItemNav>
        <ItemNav to={"/carrinho"}>Carrinho</ItemNav>
        <ItemNav to={"/login"}>Entrar</ItemNav>
        
      </ul>
    </nav>
  );
}

export default ClientNav