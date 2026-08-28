import ClientHeader from "../../../components/organism/ClientHeader";
import ClientProductItem from "../../../components/atoms/ClientProductItem";
import StyleCardapio from "./style.module.css";

export default function Cardapio() {

    const product = {
        id: 1,
        nome: "Pizza Calabresa",
        preco: "39.90",
        url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    };

    return (
        <>
            <ClientHeader />

            <main className={StyleCardapio.container}>

                <section className={StyleCardapio.intro}>

                    <span>🍕 NOSSO CARDÁPIO</span>

                    <h1>
                        Escolha sua pizza favorita
                    </h1>

                    <p>
                        Sabores preparados com ingredientes selecionados
                        para deixar seu pedido ainda mais especial.
                    </p>

                </section>

                <section className={StyleCardapio.products}>

                    <ClientProductItem product={product} />

                </section>

            </main>
        </>
    );
}