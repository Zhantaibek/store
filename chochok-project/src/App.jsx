
import React from "react";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

import ProductFilter from "./components/Products/ProductFilter";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";

import "./styles/App.css"; 

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="app">
          <div className="products-section">
            <h1>Магазин</h1>
            <ProductFilter />
            <ProductList />
          </div>

          <div className="cart-section">
            <Cart />
          </div>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
