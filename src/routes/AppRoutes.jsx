import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes.jsx";

// Cliente (Publica)
import Home from "../pages/Client/Home/index.jsx";
import Cardapio from "../pages/Client/Cardapio/";
import Produto from "../pages/Client/Produto/";
import Carrinho from "../pages/Client/Carrinho/";
import FinalizarPedido from "../pages/Client/FinalizarPedido/";
import Login from "../pages/Client/Login/index.jsx";
import Cadastro from "../pages/Client/Cadastro/index.jsx";

// Administrador (Privado)
import Dashboard from "../pages/admin/Dashboard/";
import Produtos from "../pages/admin/Produtos/";
import NovoProduto from "../pages/admin/NovoProduto/";
import EditarProduto from "../pages/admin/EditarProduto/";
import Categorias from "../pages/admin/Categorias/";
import Configuracoes from "../pages/admin/Configuracoes/";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          {/* Rota Pública (Cliente) */}
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/finalizarpedido" element={<FinalizarPedido />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Rota Privada (Adminitrador) */}~
          <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/produtos" element={<Produtos />} />
              <Route path="/admin/produtos/novo" element={<NovoProduto />} />
              <Route path="/admin/produtos/:id/editar" element={<EditarProduto />} />
              <Route path="/admin/categorias" element={<Categorias />} />
              <Route path="/admin/configuracoes" element={<Configuracoes />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
