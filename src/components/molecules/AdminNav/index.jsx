import AdminItemNav from "../../atoms/AdminItemNav";

export default function AdminNav() {
  return (
    <>
      <ul>
        <AdminItemNav to={"/admin"}>Dashboard</AdminItemNav>
        <AdminItemNav to={"/admin/produtos"}>Produtos</AdminItemNav>
        <AdminItemNav to={"/admin/categorias"}>Categorias</AdminItemNav>
        <AdminItemNav to={"/admin/configuracoes"}>Configurações</AdminItemNav>
        <AdminItemNav to={"/"}>Cliente</AdminItemNav>
      </ul>
    </>
  );
}
