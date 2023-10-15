import React, { useState } from "react";
import "./Product.css";

const Product = ({ product, onAddToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    console.log("Product added to cart:", product.title);
  };

  return (
    <div className="product">
      <div className="myImg"></div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      {showDetails && (
        <div>
          <p>Description: {product.description}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Total Price: ${product.price * product.quantity}</p>
          <button onClick={handleAddToCart}  className="add-to-cart-button">Add to Cart</button>
        </div>
      )}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default Product;
