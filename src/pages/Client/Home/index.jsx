import Header from "../../../components/organism/Header"
import StyleHome from "./style.module.css";

export default function Home(){

    return(
        <>
        <Header />
        <main>
            <section className={StyleHome.hero}>

                <div className={StyleHome.heroContent}>
                    <span className={StyleHome.subtitle}>
                        PAPA'S PIZZERIA
                        </span>

                        <h1>
                            A melhor pizza
                            <br />
                            começa aqui.
                        </h1>

                        <p>
                            Ingredientes selecionados, massa artesanal
                            e muito sabor em cada pedaço.
                        </p>

                        <button className={StyleHome.heroButton}>
                            Ver Cardápio
                        </button>
                    </div>

                        <div className={StyleHome.heroImage}>
                        <div className={StyleHome.imageCircle}>
                            🍕
                        </div>
                    </div>
            </section>
        </main>
        </>
    )
}