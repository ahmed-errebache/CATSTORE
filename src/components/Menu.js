import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faCat } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="navbar">
      <div className="left-menu">
        <Link to="/" className="logo">
          <FontAwesomeIcon icon={faCat} /> CatStore
        </Link>
      </div>
      <div className="nav-items-center">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/products">Products</Link>
        </div>
        <div className="nav-item">
          <Link to="/cart">Carts</Link>
        </div>
      </div>
      <div className="right-menu nav-item">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
