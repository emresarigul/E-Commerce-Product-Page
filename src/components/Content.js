import React, { useState } from "react";
import "../style/Content.css";
import ImageOverlay from "./ImageOverlay";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const Content = ({
  amount,
  setAmount,
  cartAmount,
  setCartAmount,
  overlayColor,
  setOverlayColor,
}) => {
  const [imageOverlay, setImageOverlay] = useState(false);
  return (
    <div className="content-container">
      <div className="content-wrapper">
        <ProductImage
          imageOverlay={imageOverlay}
          setImageOverlay={setImageOverlay}
          overlayColor={overlayColor}
          setOverlayColor={setOverlayColor}
        />
        <ProductInfo
          amount={amount}
          setAmount={setAmount}
          cartAmount={cartAmount}
          setCartAmount={setCartAmount}
        />
        {imageOverlay && (
          <ImageOverlay
            imageOverlay={imageOverlay}
            setImageOverlay={setImageOverlay}
            overlayColor={overlayColor}
            setOverlayColor={setOverlayColor}
          />
        )}
      </div>
    </div>
  );
};

export default Content;
