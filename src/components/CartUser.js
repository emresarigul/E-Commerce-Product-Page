import React, { useState, useContext } from "react";
import "../style/CartUser.css";
import cart from "../images/icon-cart.svg";
import user from "../images/image-avatar.png";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
const CartUser = () => {
  //context
  const { cartAmount } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="cart-user-wrapper">
      <div className="cart-container" onClick={cartHandler}>
        <img src={cart} alt="" />
        {cartAmount > 0 && <div className="cart-amount">{cartAmount}</div>}
      </div>
      <div className="user-container">
        <img src={user} alt="" />
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default CartUser;
