import { useCart } from "../../context/CartContext"


const CartSummary = () => {
  const {totalPrice, totalItems} = useCart()


    return (
       <div className="cart-summary">
        <p>Товаров: {totalItems}</p>
        <p>Итог: {totalPrice}</p>
       </div>
    )
}

export default CartSummary