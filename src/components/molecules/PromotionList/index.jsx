import ProductItem from "../../atoms/ProductItem";

import StylePromotionList from "./style.module.css";

export default function PromotionList() {
    const products =
        JSON.parse(localStorage.getItem("products")) || [];

    const promocoes =
        JSON.parse(localStorage.getItem("promocoes")) || [];

    const hoje = new Date().toISOString().split("T")[0];

    const produtosEmPromocao = products
        .map((product) => {
            const promocao = promocoes.find(
                (item) => Number(item.productId) === Number(product.id)
            );

            if (!promocao) {
                return null;
            }

            const promocaoValida =
                promocao.ativa === true &&
                promocao.dataInicio &&
                promocao.dataFim &&
                hoje >= promocao.dataInicio &&
                hoje <= promocao.dataFim;

            if (!promocaoValida) {
                return null;
            }

            return {
                product,
                promocao
            };
        })
        .filter(Boolean);

    return (
        <section className={StylePromotionList.list}>
            {produtosEmPromocao.length > 0 ? (
                produtosEmPromocao.map(
                    ({ product, promocao }) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            promocao={promocao}
                        />
                    )
                )
            ) : (
                <p className={StylePromotionList.vazio}>
                    Nenhuma promoção disponível no momento.
                </p>
            )}
        </section>
    );
}