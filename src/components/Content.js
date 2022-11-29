import React, { useState } from "react";
import "../style/Content.css";
import ImageOverlay from "../pages/product/components/ImageOverlay";
import ProductImage from "../pages/product/components/ProductImage";
import ProductInfo from "../pages/product";

const Content = ({
  amount,
  setAmount,

  overlayColor,
  setOverlayColor,
}) => {
  const [imageOverlay, setImageOverlay] = useState(false);
  return (
    <div className="content-container">
      <div className="content-wrapper">
        {/* <ProductImage
          imageOverlay={imageOverlay}
          setImageOverlay={setImageOverlay}
          overlayColor={overlayColor}
          setOverlayColor={setOverlayColor}
        />
        <ProductInfo amount={amount} setAmount={setAmount} />
        {imageOverlay && (
          <ImageOverlay
            imageOverlay={imageOverlay}
            setImageOverlay={setImageOverlay}
            overlayColor={overlayColor}
            setOverlayColor={setOverlayColor}
          />
        )} */}
      </div>
    </div>
  );
};

export default Content;
