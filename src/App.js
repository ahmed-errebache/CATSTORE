import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { products, defaultCartItems } from "./Data";

const App = () => {
  const [cartItems, setCartItems] = useState(defaultCartItems);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
  };

  const handleDeleteFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route
          path="/products"
          element={<Products onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              onDelete={handleDeleteFromCart}
            />
          }
        />
        <Route
          path="/"
          element={<Home onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </div>
  );
};

const Products = ({ onAddToCart }) => {
  const [notification, setNotification] = useState("");

  const handleAddToCart = (product) => {
    setNotification(`Added to Cart: ${product.title}`);
    onAddToCart(product);
  };

  return (
    <div>
      <div className="title">Products</div>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

const ShoppingCart = ({ cartItems, onDelete }) => {
  return (
    <div>
      <div className="title">Shopping Cart</div>
      <div className="cart">
        {cartItems.map((item) => (
          <Cart key={item.id} item={item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

const Home = ({ onAddToCart }) => {
  return (
    <div>
      <div className="title">Products</div>
      <div className="products">
        {products.slice(-4).map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
