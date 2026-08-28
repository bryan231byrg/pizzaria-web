import ClientItemNav from "../../atoms/ClientItemNav";
import StyleClientNav from "./style.module.css";

export default function ClientNav() {
  return (
    <nav className={StyleClientNav.nav}>
      <ul className={StyleClientNav.navList}>
        <ClientItemNav to={"/"}>Ínicio</ClientItemNav>
        <ClientItemNav to={"/cardapio"}>Cardapio</ClientItemNav>
        <ClientItemNav to={"/carrinho"}>Carrinho</ClientItemNav>
        <ClientItemNav to={"/finalizarPedido"}>Finalizar Pedido</ClientItemNav>
        <ClientItemNav to={"/produto/1"}>Produto</ClientItemNav>
        <ClientItemNav to={"/admin"}>Administrador</ClientItemNav>
        
      </ul>
    </nav>
  );
}
