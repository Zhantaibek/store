import { useCart } from "../../context/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart, cart } = useCart();
  const inCart = cart.find((item) => item.id === product.id);

  return (
    <li className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button 
        className={inCart ? "in-cart" : ""}
        onClick={() => addToCart(product)}
      >
        {inCart ? "В корзине" : "Добавить в корзину"}
      </button>
    </li>
  );
};

export default ProductItem;
