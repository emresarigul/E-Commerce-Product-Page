import React, { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import "./style/App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
  const [overlayColor, setOverlayColor] = useState(false);
  const [mobileNavOverlay, setMobileNavOverlay] = useState(false);
  return (
    <div className="main-content-wrapper">
      {mobileNavOverlay && <div className="mobile-nav-overlay"></div>}
      <Header
        cartAmount={cartAmount}
        setCartAmount={setCartAmount}
        mobileNavOverlay={mobileNavOverlay}
        setMobileNavOverlay={setMobileNavOverlay}
      />
      <Content
        amount={amount}
        setAmount={setAmount}
        cartAmount={cartAmount}
        setCartAmount={setCartAmount}
        overlayColor={overlayColor}
        setOverlayColor={setOverlayColor}
      />
    </div>
  );
}

export default App;
