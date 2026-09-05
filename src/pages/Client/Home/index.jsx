import { useState } from "react";

import Header from "../../../components/organism/Header";
import Cardapio from "../Cardapio";
import StyleHome from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../components/atoms/Logo";

import {
    faLocationDot,
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const [categoria, setCategoria] = useState("");
    const [busca, setBusca] = useState("");

    return (
        <>
            <Header />

            <main>
                <section className={StyleHome.hero}>
                    <div className={StyleHome.heroContent}>
                        <div className={StyleHome.logo}>
                            <Logo></Logo>
                        </div>
                    </div>
                </section>

                <section className={StyleHome.restaurantInfo}>
                    <h1>Papa's Pizza's | Fortaleza</h1>

                    <div className={StyleHome.info}>
                        <span className={StyleHome.open}>
                            Apenas agendamento • Abrimos às 17h00
                        </span>

                        <span>•</span>

                        <span>
                            <FontAwesomeIcon icon={faLocationDot} />
                            Fortaleza - CE
                        </span>
                    </div>
                </section>

                <section className={StyleHome.filters}>
                    <select
                        className={StyleHome.categories}
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="">📋 Lista de categorias</option>
                        <option value="Destaques">⭐ Destaques</option>
                        <option value="Oferta Limitada">🔥 Oferta Limitada</option>
                        <option value="Promoções">🏷️ Promoções</option>
                        <option value="Pizza Grande">🍕 Pizza Grande</option>
                        <option value="Pizza Pequena">🍕 Pizza Pequena</option>
                        <option value="Calzone Grande">🥟 Calzone Grande</option>
                        <option value="Bebidas">🥤 Bebidas</option>
                    </select>

                    <div className={StyleHome.search}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />

                        <input
                            placeholder="Busque por um produto"
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                    </div>
                </section>

                <section className={StyleHome.Cardapio}>
                    <Cardapio
                        categoria={categoria}
                        busca={busca}
                    />
                </section>
            </main>
        </>
    );
}