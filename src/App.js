import Product from "./components/Products";
import Cart from "./components/Cart";

import "./App.css";
import { useState } from "react";

function App() {
  const Products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 },
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem && existingItem.quantity > 1) {
      const updatedCart = cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      const updatedCart = cartItems.filter(
        (item) => item.product.id !== product.id
      );
      setCartItems(updatedCart);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <Product
        productList={Products}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        cartItems={cartItems}
      />
      <Cart cartList={cartItems} totalPrice={totalPrice} />
    </div>
  );
}

export default App;
