import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import '../../styles/cart.css'
const Cart = () => {
  const { cart } = useCart();

  if (!cart.length) {
    return <p>Корзина пуста</p>;
  }

  return (
    <div className="cart">
      <h2>Корзина</h2>

      <ul className="cart-list">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <CartSummary />
    </div>
  );
};

export default Cart;
