import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Client/Home";
import Cardapio from "./assets/pages/Client/Cardapio";
import Produto from "./assets/pages/Client/Produto";
import Carrinho from "./assets/pages/Client/Carrinho";
import FinalizarPedido from "./assets/pages/Client/FinalizarPedido";

import Dashboard from "./assets/pages/admin/Dashboard";
import Produtos from "./assets/pages/admin/Produtos";
import NovoProduto from "./assets/pages/admin/NovoProduto";
import EditarProduto from "./assets/pages/admin/EditarProduto";
import Categorias from "./assets/pages/admin/Categorias";
import Configuracoes from "./assets/pages/admin/Configuracoes";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rota Pública (Cliente) */}
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/finalizar-pedido" element={<FinalizarPedido />} />

        {/* Rota Privada (Adminitrador) */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/produtos" element={<Produtos />} />
        <Route path="/admin/produtos/novo" element={<NovoProduto />} />
        <Route path="/admin/produtos/:id/editar" element={<EditarProduto />} />
        <Route path="/admin/categorias" element={<Categorias />} />
        <Route path="/admin/configuracoes" element={<Configuracoes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;