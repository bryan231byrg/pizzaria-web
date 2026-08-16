import { BrowserRouter, Routes, Route } from "react-router-dom";

// Cliente (Publica)
import Home from "./pages/Client/Home/";
import Cardapio from "./pages/Client/Cardapio";
import Produto from "./pages/Client/Produto";
import Carrinho from "./pages/Client/Carrinho";
import FinalizarPedido from "./pages/Client/FinalizarPedido";

// Administrador (Privado)
import Dashboard from "./pages/admin/Dashboard/";
import Produtos from "./pages/admin/Produtos/";
import NovoProduto from "./pages/admin/NovoProduto/";
import EditarProduto from "./pages/admin/EditarProduto/";
import Categorias from "./pages/admin/Categorias/";
import Configuracoes from "./pages/admin/Configuracoes/";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rota Pública (Cliente) */}
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/finalizarpedido" element={<FinalizarPedido />} />

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