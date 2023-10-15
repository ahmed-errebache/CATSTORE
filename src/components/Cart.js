import React from "react";
import "./Cart.css";

const Cart = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className="cart-item">
      <div className="myImg"></div>
      <h2>{item.title}</h2>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.total}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Cart;
