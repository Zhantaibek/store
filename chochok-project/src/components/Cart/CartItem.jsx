import { memo } from "react";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const {
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  return (
    <li className="cart-item">
      <img
        className="cart-image"
        src={item.image}
        alt={item.title}
      />

      <div className="cart-info">
        <h4>{item.title}</h4>
        <p>{item.price} $</p>

        <div className="cart-controls">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
      </div>

      <button
        className="cart-remove"
        onClick={() => removeFromCart(item.id)}
      >
        ✕
      </button>
    </li>
  );
};

export default memo(CartItem);
