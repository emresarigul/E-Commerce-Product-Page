import React, { useState } from "react";
import "../style/Header.css";
import logo from "../images/logo.svg";
import mobileMenu from "../images/icon-menu.svg";
import Navigation from "./Navigation";
import CartUser from "./CartUser";

const Header = ({
  cartAmount,
  setCartAmount,
  mobileNavOverlay,
  setMobileNavOverlay,
}) => {
  const [mobileNavOpener, setMobileNavOpener] = useState(false);

  const mobileNavHandler = () => {
    setMobileNavOverlay(!mobileNavOverlay);
    setMobileNavOpener(!mobileNavOpener);
    document.body.classList.add("overflow-hidden-body");
  };

  return (
    <div className="container">
      <div className="header-wrapper">
        <div className="header-left">
          <div className="mobile-menu" onClick={mobileNavHandler}>
            <img src={mobileMenu} alt="" />
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Navigation
            mobileNavOverlay={mobileNavOverlay}
            setMobileNavOverlay={setMobileNavOverlay}
            mobileNavOpener={mobileNavOpener}
            setMobileNavOpener={setMobileNavOpener}
          />
        </div>
        <div className="header-right">
          <CartUser cartAmount={cartAmount} setCartAmount={setCartAmount} />
        </div>
      </div>
    </div>
  );
};

export default Header;
