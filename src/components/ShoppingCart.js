import React from "react";
import Cart from "./Carts";

const ShoppingCart = ({ cartItems, onDelete }) => {
  return (
    <div>
      <div className="title">Shopping Cart</div>
      <div className="cart">
        {cartItems.map((item) => (
          <div key={item.id}>
            <Cart item={item} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
