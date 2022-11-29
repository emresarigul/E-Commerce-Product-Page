import React, { useState, useContext } from "react";
import Header from "./components/Header";
import "./style/App.css";
import CartContextProvider from "./context/CartContext";
import { CartContext } from "./context/CartContext";
import ProductDetail from "./pages/product";

function AppComponent() {
  const { overlayColor } = useContext(CartContext);
  const [mobileNavOverlay, setMobileNavOverlay] = useState(false);

  return (
    <div className="main-content-wrapper">
      {mobileNavOverlay && <div className="mobile-nav-overlay"></div>}
      {overlayColor && <div className="overlay-color"></div>}
      <Header
        mobileNavOverlay={mobileNavOverlay}
        setMobileNavOverlay={setMobileNavOverlay}
      />
      {/*product layout*/}
      <ProductDetail />
    </div>
  );
}
const App = () => (
  <CartContextProvider>
    <AppComponent />
  </CartContextProvider>
);

export default App;
