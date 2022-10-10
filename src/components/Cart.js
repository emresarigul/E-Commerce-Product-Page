import React from "react";
import thumbImage1 from "../images/image-product-1-thumbnail.jpg";
import deleteBtn from "../images/icon-delete.svg";

const Cart = ({ cartAmount, setCartAmount }) => {
  const deleteHandler = () => {
    setCartAmount(0);
  };

  if (cartAmount > 0) {
    return (
      <div className="cart-wrapper">
        <div className="cart">
          <div className="cart-name">Cart</div>
          <div className="cart-product-details">
            <div className="image-thumb">
              <img src={thumbImage1} alt="" />
            </div>
            <div className="product-detail-price">
              <div className="detail">Fall Limited Edition Sneakers</div>
              <div className="price">
                {`$125.00 x${cartAmount}`}
                <span>{`$${cartAmount * 125}.00`}</span>
              </div>
              <div className="delete" onClick={deleteHandler}>
                <img src={deleteBtn} alt="" />
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <button className="cart-btn">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="cart-wrapper">
      <div className="cart">
        <div className="cart-name">Cart</div>
        <div className="empty-cart-details">Your cart is empty.</div>
      </div>
    </div>
  );
};

export default Cart;
