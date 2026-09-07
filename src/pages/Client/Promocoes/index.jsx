import { useState } from "react";

import PromotionList from "../../../components/molecules/PromotionList/";

import StylePromocoes from "./style.module.css";

function Promocoes() {
    const [modalAberto, setModalAberto] = useState(false);

    function fecharModal() {
        setModalAberto(false);
    }

    return (
        <main className={StylePromocoes.main}>
            <h1>Promoções</h1>

            <button
                className={StylePromocoes.btnPromocoes}
                onClick={() => setModalAberto(true)}
            >
                Ver promoções
            </button>

            {modalAberto && (
                <div
                    className={StylePromocoes.overlay}
                    onClick={fecharModal}
                >
                    <div
                        className={StylePromocoes.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={StylePromocoes.modalHeader}>
                            <div>
                                <h2>Promoções</h2>

                                <p>
                                    Confira nossas ofertas disponíveis.
                                </p>
                            </div>

                            <button
                                className={StylePromocoes.btnFechar}
                                onClick={fecharModal}
                            >
                                ×
                            </button>
                        </div>

                        <div className={StylePromocoes.modalBody}>
                            <PromotionList />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Promocoes;