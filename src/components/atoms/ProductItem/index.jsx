import StyleProductItem from "./style.module.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faTrash,
    faPen,
    faCartPlus,
    faBolt
} from "@fortawesome/free-solid-svg-icons";

export default function ProductItem({ product, products, setProducts }) {

    const navigate = useNavigate();
    const { user } = useAuth();

    const deleteProduct = () => {
        const productFiltered = products.filter(
            (p) => p.id !== product.id
        );
        setProducts(productFiltered);

        localStorage.setItem("products", JSON.stringify(productFiltered));
    };

    const editProduct = () => {
        navigate(`/admin/produtos/${product.id}/editar`);
    };

    const addToCart = () => {
        console.log("Produto adicionado ao carrinho:", product);
    };

    const buyNow = () => {
        console.log("Comprar agora:", product);
    };

    return (
        <article className={StyleProductItem.card}>

            <img
                src={product.url}
                alt={product.nome}
                className={StyleProductItem.image}
            />

            <div className={StyleProductItem.info}>
                <h2>{product.nome}</h2>
                
                <p>
                    R$ {Number(product.preco).toFixed(2) .replace(".", ",")}
                </p>
            </div>

            {user?.tipo === "admin" ? (
                <div className={StyleProductItem.actions}>

                    <button
                        onClick={editProduct}
                        className={`${StyleProductItem.btnItem} ${StyleProductItem.btnEdit}`}
                    >
                        <FontAwesomeIcon icon={faPen} />
                        Editar
                    </button>

                    <button
                        onClick={deleteProduct}
                        className={`${StyleProductItem.btnItem} ${StyleProductItem.btnDelete}`}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                        Remover
                    </button>
                </div>
                
            ) : (

                <div className={StyleProductItem.actions}>

                    <button
                        onClick={addToCart}
                        className={`${StyleProductItem.btnItem} ${StyleProductItem.btnCart}`}
                    >
                        <FontAwesomeIcon icon={faCartPlus} />
                        Carrinho
                    </button>

                    <button
                        onClick={buyNow}
                        className={`${StyleProductItem.btnItem} ${StyleProductItem.btnBuy}`}
                    >
                        <FontAwesomeIcon icon={faBolt} />
                        Comprar agora
                    </button>

                </div>

            )}

        </article>
    );
}