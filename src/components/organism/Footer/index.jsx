import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faInstagram,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import StyleFooter from "./style.module.css";

function Footer() {

    return (
        <footer className={StyleFooter.footer}>

            <section className={StyleFooter.brand}>
                <h2>Papa's Pizza's</h2>

                <p>
                    As melhores pizzas de Fortaleza,
                    feitas com qualidade e muito sabor.
                </p>
            </section>

            <section className={StyleFooter.navigation}>
                <h3>Navegação</h3>

                <nav>
                    <a href="#inicio">Início</a>
                    <a href="#cardapio">Cardápio</a>
                </nav>
            </section>

            <section className={StyleFooter.contact}>
                <h3>Atendimento</h3>

                <p>Fortaleza - CE</p>
                <p>Segunda a Domingo</p>
                <p>17h00 às 23h30</p>
            </section>

            <section className={StyleFooter.social}>
                <h3>Siga-nos</h3>

                <div className={StyleFooter.socialIcons}>

                    <a href="#" aria-label="WhatsApp">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>

                    <a href="#" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                </div>
            </section>

            <section className={StyleFooter.copyright}>
                <p>
                    © 2026 Papa's Pizza's. Todos os direitos reservados.
                </p>
            </section>

        </footer>
    );
}

export default Footer;