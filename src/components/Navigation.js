import React from "react";
import "../style/Navigation.css";
import closeBtn from "../images/icon-close.svg";
const Navigation = ({
  mobileNavOverlay,
  setMobileNavOverlay,
  mobileNavOpener,
  setMobileNavOpener,
}) => {
  const mobileNavClose = () => {
    setMobileNavOpener(!mobileNavOpener);
    setMobileNavOverlay(!mobileNavOverlay);
    document.body.classList.remove("overflow-hidden-body");
  };

  return (
    <>
      <ul className="nav">
        <li>
          <a href="/">Collections</a>
        </li>
        <li>
          <a href="/">Men</a>
        </li>
        <li>
          <a href="/">Women</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <ul className={`mobile-nav ${mobileNavOpener ? "toggle" : ""}`}>
        <div className="mobile-nav-close-btn" onClick={mobileNavClose}>
          <img src={closeBtn} alt="" />
        </div>
        <li>
          <a href="/">Collections</a>
        </li>
        <li>
          <a href="/">Men</a>
        </li>
        <li>
          <a href="/">Women</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
