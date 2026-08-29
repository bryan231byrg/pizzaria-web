import ItemNav from "../../atoms/ItemNav";

export default function AdminNav() {
  return (
    <>
      <ul>
        <ItemNav to={"/admin"}>Dashboard</ItemNav>
        <ItemNav to={"/admin/produtos"}>Produtos</ItemNav>
        <ItemNav to={"/admin/categorias"}>Categorias</ItemNav>
        <ItemNav to={"/admin/configuracoes"}>Configurações</ItemNav>
        <ItemNav to={"/"}>Cliente</ItemNav>
      </ul>
    </>
  );
}
