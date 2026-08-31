import Header from "../../../components/organism/Header";
import CartList from "../../../components/molecules/CartList";

import StyleCarrinho from "./style.module.css";

export default function Carrinho() {

    return (
        <>
            <Header />

            <main className={StyleCarrinho.container}>

                <div className={StyleCarrinho.title}>
                    <span>Seu pedido</span>

                    <h1>Meu Carrinho</h1>
                </div>

                <CartList />

            </main>
        </>
    );
}