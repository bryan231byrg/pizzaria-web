import StylePedidos from "./style.module.css";

import Header from "../../../components/organism/Header";

function Pedidos() {
    const pedidos = [
        {
            id: 1,
            cliente: "João Silva",
            itens: "Pizza Calabresa, Coca-Cola",
            total: "R$ 54,90",
            status: "Pendente"
        },
        {
            id: 2,
            cliente: "Maria Santos",
            itens: "Pizza 4 Queijos, Guaraná",
            total: "R$ 62,90",
            status: "Preparando"
        },
        {
            id: 3,
            cliente: "Carlos Oliveira",
            itens: "Pizza Frango com Catupiry",
            total: "R$ 49,90",
            status: "Saiu para entrega"
        },
        {
            id: 4,
            cliente: "Ana Costa",
            itens: "Pizza Portuguesa, Coca-Cola",
            total: "R$ 59,90",
            status: "Entregue"
        }
    ];

    return (
        <>
            <Header />

            <main className={StylePedidos.pedidos}>
                <h1>Pedidos</h1>

                <div className={StylePedidos.lista}>
                    {pedidos.map((pedido) => (
                        <div className={StylePedidos.pedido} key={pedido.id}>
                            <h2>Pedido #{pedido.id}</h2>

                            <p>
                                <strong>Cliente:</strong> {pedido.cliente}
                            </p>

                            <p>
                                <strong>Itens:</strong> {pedido.itens}
                            </p>

                            <p>
                                <strong>Total:</strong> {pedido.total}
                            </p>

                            <p>
                                <strong>Status:</strong> {pedido.status}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Pedidos;