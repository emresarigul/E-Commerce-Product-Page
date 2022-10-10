import React, { useEffect } from "react";
import "../style/ProductInfo.css";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

const ProductInfo = ({ amount, setAmount, cartAmount, setCartAmount }) => {
  const plusHandler = () => {
    setAmount(amount + 1);
  };

  const minusHandler = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const addToCardHandler = () => {
    setCartAmount((prevCartAmount) => prevCartAmount + amount);
    setAmount(0);
  };

  return (
    <div className="content-info-wrapper">
      <div className="brand">SNEAKER COMPANY</div>
      <div className="product-name">Fall Limited Edition Sneakers</div>
      <div className="product-description">
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="product-price-wrapper">
        <div className="product-price">
          $125.00 <span className="discount-value">50%</span>
        </div>
        <div className="product-old-price">$250.00</div>
      </div>
      <div className="user-cta-wrapper">
        <div className="amount-wrapper">
          <div className="minus" onClick={minusHandler}>
            <img src={minus} alt="" />
          </div>
          <div className="amount">{amount}</div>
          <div className="plus" onClick={plusHandler}>
            <img src={plus} alt="" />
          </div>
        </div>
        <button className="btn" onClick={addToCardHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
