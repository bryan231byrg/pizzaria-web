import ClientItemNav from "../../atoms/ClientItemNav";

export default function ClientNav() {
  return (
    <>
      <ul>
        <ClientItemNav to={"/"}>Ínicio</ClientItemNav>
        <ClientItemNav to={"/cardapio"}>Cardapio</ClientItemNav>
        <ClientItemNav to={"/carrinho"}>Carrinho</ClientItemNav>
        <ClientItemNav to={"/finalizarPedido"}>Finalizar Pedido</ClientItemNav>
        <ClientItemNav to={"/produto/1"}>Produto</ClientItemNav>
        <ClientItemNav to={"/admin"}>Administrador</ClientItemNav>
        
      </ul>
    </>
  );
}
